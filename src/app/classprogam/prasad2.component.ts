import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prasad2',
  templateUrl: './prasad2.component.html',
  styleUrls: ['./prasad2.component.css']
})
export class Prasad2Component implements OnInit {
  public name:string="prasad reddy";
  public website:string=window.location.href;
  public getEmployee(){return this.name};
  public myImage="../assets/pic.jpg";
  myId(value:any){
    alert(value);

  }



  ngOnInit() {
  }

}
