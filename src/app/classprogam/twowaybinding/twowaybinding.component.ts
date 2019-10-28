import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  public fname:string='prasad'
  public sname:string='reddy'

  constructor() { }

  ngOnInit() {
  }

}
