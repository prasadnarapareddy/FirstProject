import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentjsonService {
  private url:string="assets/jsonfiles/studentdata.json"


  constructor( private http:HttpClient) { }

  getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.url)
  }
}
