import { Component, OnInit } from '@angular/core';
import { CalserviceService } from '../calservice.service';

@Component({
  selector: 'app-addoppser',
  templateUrl: './addoppser.component.html',
  styleUrls: ['./addoppser.component.css']
})
export class AddoppserComponent implements OnInit {
  addresult:any;

  constructor(private calserviceService:CalserviceService) { }
   
  addInsertaOpp(x: number,y: number){
  
  this.addresult=this.calserviceService.addOpp(x,y)
  }


  ngOnInit() {
  }

}
