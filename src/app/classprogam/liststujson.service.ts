import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class ListstujsonService {
  private url:string="assets/jsonfiles/listofstudents.json"

  constructor(private http:HttpClient) { }
  listofstudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.url)
  }
}
