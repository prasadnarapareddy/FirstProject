import { Component, OnInit } from '@angular/core';
import { ListstujsonService } from '../liststujson.service';

@Component({
  selector: 'app-webtech',
  templateUrl: './webtech.component.html',
  styleUrls: ['./webtech.component.css']
})
export class WebtechComponent implements OnInit {
  public studentlist=[];
  public errorMsg;

  constructor(private liststujsonService:ListstujsonService) { }

  ngOnInit() {
    this.liststujsonService.listofstudents()
    .subscribe(result=>this.studentlist=result,
      error=>this.errorMsg=error)
  }

}
