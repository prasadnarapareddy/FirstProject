import { Component, OnInit } from '@angular/core';
import { CalserviceService } from '../calservice.service';

@Component({
  selector: 'app-suboppser',
  templateUrl: './suboppser.component.html',
  styleUrls: ['./suboppser.component.css']
})
export class SuboppserComponent implements OnInit {
  subresult:any;

  constructor( private calserviceService:CalserviceService) { }
  
  SubOpp(x,y){
    this.subresult=this.calserviceService.subOpp(x,y);
  }

  ngOnInit() {
  }

}
