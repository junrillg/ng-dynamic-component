import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../json.service';
import { LoadComponentDirective } from '../load-component.directive';
import { RenderComponent } from '../render/render.component';
import { DataBroadcastService } from '../data-broadcast.service';

@Component({
  selector: 'app-initializer',
  templateUrl: './initializer.component.html',
  styleUrls: ['./initializer.component.css']
})
export class InitializerComponent implements OnInit {
  @ViewChild(LoadComponentDirective) loadComponent: LoadComponentDirective;
  @ViewChild('table') tableTemplate;
  @ViewChild('card') cardTemplate;

  config;
  constructor(
    private route: ActivatedRoute,
    private jsonService: JsonService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private dataBroadcastService: DataBroadcastService
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      const jsonFileName = params['data'];

      // broadcase change in params
      this.dataBroadcastService.broadcastDataChange(jsonFileName);

      if (jsonFileName) {
        this.jsonService.fetchConfig(jsonFileName).subscribe(data => {
          this.renderComponent(data, jsonFileName);
        });
      }
    });
  }

  /**
   * Render component based on type
   *
   * @param data
   * @param filename
   */
  renderComponent(data, filename) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RenderComponent);
    const viewContainerRef = this.loadComponent.viewContainer;
    viewContainerRef.remove();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as RenderComponent;
    instance.configData = data;
    instance.fileName = filename;
    instance.template = this[`${data.type}Template`];
  }
}
