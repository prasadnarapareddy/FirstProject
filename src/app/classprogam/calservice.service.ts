import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalserviceService {

  addOpp(x,y){return Number(x)+Number(y)}

  mulOpp(x,y){return x*y}

  subOpp(x,y){return x-y}

  

  constructor() { } 
}
