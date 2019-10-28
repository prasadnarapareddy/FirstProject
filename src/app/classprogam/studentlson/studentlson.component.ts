import { Component, OnInit } from '@angular/core';
import { StudentjsonService } from '../studentjson.service';

@Component({
  selector: 'app-studentlson',
  templateUrl: './studentlson.component.html',
  styleUrls: ['./studentlson.component.css']
})
export class StudentlsonComponent implements OnInit {
  public students = [];
  public errmsg;

  constructor(private studentjsonService: StudentjsonService) { }

  ngOnInit() {
    this.studentjsonService.getStudents()
    .subscribe(result=>this.students=result,
      error=>this.errmsg=error);


      }
    }

    
