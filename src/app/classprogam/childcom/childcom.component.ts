import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.css']
})
export class ChildcomComponent implements OnInit {
  @Input()
  uname:string;
  @Output()
notify:EventEmitter<string>=  new EventEmitter<string>();
passData(){
  this.notify.emit('Message Comeing From Child Component')

}

  constructor() { }

  ngOnInit() {
  }

}
