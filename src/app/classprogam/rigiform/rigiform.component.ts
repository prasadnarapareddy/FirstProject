import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rigiform',
  templateUrl: './rigiform.component.html',
  styleUrls: ['./rigiform.component.css']
})
export class RigiformComponent  {


  onSubmit(value:any){
  console.log(value)
  }

  

  


}
