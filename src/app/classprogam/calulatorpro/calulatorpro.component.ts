import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calulatorpro',
  templateUrl: './calulatorpro.component.html',
  styleUrls: ['./calulatorpro.component.css']
})
export class CalulatorproComponent implements OnInit {
  addOpp(x:any,y:any){
    alert(x);
    alert(y);
    alert(Number(x)+Number(y));
  }
  subOpp(x:any,y:any){
    alert(x);
    alert(y);
    alert(x-y);
  }
  mulOpp(x:any,y:any){
    alert(x);
    alert(y);
    alert(x*y);
  }

   

  constructor() { }

  ngOnInit() {
  }

}
