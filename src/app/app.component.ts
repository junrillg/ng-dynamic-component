import {Component, OnInit} from '@angular/core';
import {JsonService} from './json.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mainView;
  activateScreen = false;
  paramsValue;

  constructor(private jsonService: JsonService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.jsonService.fetchConfig('mainview').subscribe(data => {
      this.mainView = data;
    });

    this.route.params.subscribe( params => {
      this.paramsValue = params['data'];
      console.log(this.paramsValue);
    });
  }

  onActivate(e) {
    this.activateScreen = true;
  }
  onDeactivate(e) {
    this.activateScreen = false;
  }
}
