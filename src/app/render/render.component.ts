import {Component, Input, OnInit} from '@angular/core';
import {JsonService} from '../json.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  @Input() template;
  @Input() configData: object;
  @Input() fileName: string;

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonService.fetchData(this.fileName).subscribe(data => {
      console.log(data);
    });

  }

}
