import { Component, OnInit } from '@angular/core';
import { CalserviceService } from '../calservice.service';

@Component({
  selector: 'app-divoperser',
  templateUrl: './divoperser.component.html',
  styleUrls: ['./divoperser.component.css']
})
export class DivoperserComponent implements OnInit {
  mulresult:any;

  constructor(private calserviceService:CalserviceService) {}

  MulInsertOpp(x,y){
     this.mulresult=this.calserviceService.mulOpp(x,y)



  }
  

  ngOnInit() {
  }

}
