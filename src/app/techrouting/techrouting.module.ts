import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavatechComponent } from '../classprogam/javatech/javatech.component';
import { WebtechComponent } from '../classprogam/webtech/webtech.component';
import { Routes, RouterModule } from '@angular/router';




const routes:Routes =[
{ path:'web',component:WebtechComponent}, 

{path:'java',component:JavatechComponent },

{path:'',component:WebtechComponent,pathMatch:'full'},
{path:'**',component:JavatechComponent,pathMatch:'full'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
    
   
})
export class TechroutingModule { }
export const routingcomponents=[WebtechComponent,JavatechComponent]
