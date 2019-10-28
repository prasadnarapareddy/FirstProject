import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message:string;
  currentMessage:string;
  

  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message=>this.message=message)
  }
  newMessage(){
    this.dataservice.changeMessage("Hello From Sibling")
  }

}
