import { Component, OnInit} from '@angular/core';
import {JsonService} from './json.service';
import {ActivatedRoute} from '@angular/router';
import { DataBroadcastService } from './data-broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainView;
  activateScreen = false;
  paramsValue;

  constructor(
    private jsonService: JsonService,
    private route: ActivatedRoute,
    private dataBroadcastService: DataBroadcastService
  ) {}

  ngOnInit() {
    // fetch main data config
    this.jsonService.fetchConfig('mainview').subscribe(data => {
      this.mainView = data;
    });

    // subscribe to any changes in params
    this.dataBroadcastService.data.subscribe( data => {
      this.paramsValue = data;
    });
  }

  /**
   * Method when router is active
   */
  onActivate() {
    this.activateScreen = true;
  }

  /**
   * Method when router is deactivate
   */
  onDeactivate() {
    this.activateScreen = false;
  }
}
