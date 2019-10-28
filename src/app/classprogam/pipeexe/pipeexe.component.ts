import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexe',
  templateUrl: './pipeexe.component.html',
  
})
export class PipeexeComponent implements OnInit {
  public myname:string = 'prasad reddy';
  public mynumber:number = 12.123456789;
  public mynumber2:any = 0.56;
  public myprice:any = 600.54;
  public myamount:any = 5000;
  public mydate:any = new Date();
  public mydate2:any=new Date(1983,3,13);
  person :object={'name':'suresh','age':'33'}

  

  constructor() { }

  ngOnInit() {
  }

}
