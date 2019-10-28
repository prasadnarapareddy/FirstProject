import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employelist';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {
  private url:string="assets/jsonfiles/listofemployee.json"

  constructor(private http:HttpClient) { }
  getlistemployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }
}
