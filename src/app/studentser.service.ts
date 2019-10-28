import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserService {
  studentList(){
    return[{"empid":101,"empName":'prasad' ,"salary":50000},
    {"empid":102,"empName":'reddy' ,"salary":50000},
    {"empid":103,"empName":'narapareddy' ,"salary":50000}
  
  
  
  ]
  }

  constructor() { }
}
