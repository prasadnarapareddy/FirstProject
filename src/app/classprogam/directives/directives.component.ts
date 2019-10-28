import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  
  // public showElement:boolean= false;
  // public course:string="Angular";
  // public names:string[]=['uday','chiru','prasad','reddy'];
  public c1: boolean=false;
  public c2: boolean=true;


  constructor() { }

  ngOnInit() {
  }

}
