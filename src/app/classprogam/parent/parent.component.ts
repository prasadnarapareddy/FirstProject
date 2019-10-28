import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message:string;
  currentMessage:string;
  

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message=>this.message=message);
  }

}
