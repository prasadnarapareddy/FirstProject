import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messagecreate = new BehaviorSubject('Initial Message');
  currentMessage =this.messagecreate.asObservable();

  constructor() { }
  changeMessage(message:string){
    this.messagecreate.next(message)
  }
}
