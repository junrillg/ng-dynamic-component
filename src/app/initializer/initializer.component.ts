import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JsonService} from '../json.service';
import {LoadComponentDirective} from '../load-component.directive';
import {RenderComponent} from '../render/render.component';

@Component({
  selector: 'app-initializer',
  templateUrl: './initializer.component.html',
  styleUrls: ['./initializer.component.css']
})
export class InitializerComponent implements OnInit, AfterViewInit {
  @ViewChild(LoadComponentDirective) loadComponent: LoadComponentDirective;
  @ViewChild('table') tableTemplate;
  @ViewChild('card') cardTemplate;

  config;
  constructor(
    private route: ActivatedRoute,
    private jsonService: JsonService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      const jsonFileName = params['data'];
      if (jsonFileName) {
        this.jsonService.fetchConfig(jsonFileName).subscribe(data => {
          this.renderComponent(data, jsonFileName);
        });
      }
    });
  }

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

  ngAfterViewInit() {
    console.log(this.tableTemplate);
  }

}
