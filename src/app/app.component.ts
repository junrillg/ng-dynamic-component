import { Component, OnInit} from '@angular/core';
import {JsonService} from './json.service';

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
    private jsonService: JsonService
  ) {}

  ngOnInit() {
    // fetch main data config
    this.jsonService.fetchConfig('mainview').subscribe(data => {
      this.mainView = data;
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
