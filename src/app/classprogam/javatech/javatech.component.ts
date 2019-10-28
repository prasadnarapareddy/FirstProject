import { Component, OnInit } from '@angular/core';
import { StudentdataService } from '../studentdata.service';

@Component({
  selector: 'app-javatech',
  templateUrl: './javatech.component.html',
  styleUrls: ['./javatech.component.css']
})
export class JavatechComponent implements OnInit {
  public employeelist=[];
  public errorMsg;

  constructor(private studentdataService:StudentdataService) { }

  ngOnInit() {
    this.studentdataService.getlistemployees()
    .subscribe(result=>this.employeelist=result,
      error=>this.errorMsg=error)
  }

}
