import { Component, OnInit } from '@angular/core';
import { StudentserService } from 'src/app/studentser.service';


@Component({
  selector: 'app-studentser',
  templateUrl: './studentser.component.html',
  styleUrls: ['./studentser.component.css']
})
export class StudentserComponent implements OnInit {
  
  myStudents:any=[];
  

  constructor(private studentserService:StudentserService) {
    this.myStudents=this.studentserService.studentList()
   }

  

  ngOnInit() {
  }

}
