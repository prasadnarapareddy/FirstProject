import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule }from '@angular/forms'

import { AppComponent } from './app.component';
import { Prasadcomponent } from 'src/prasad.component';
import { Prasad2Component } from './classprogam/prasad2.component';
import { CalulatorproComponent } from './classprogam/calulatorpro/calulatorpro.component';
import { DirectivesComponent } from './classprogam/directives/directives.component';
import { TwowaybindingComponent } from './classprogam/twowaybinding/twowaybinding.component';
import { CusdirectiveDirective } from './classprogam/cusdirective.directive';
import { ReverseStringPipe } from './man.pipe';
import { PipeexeComponent } from './classprogam/pipeexe/pipeexe.component';
import { PipeautPipe } from './classprogam/pipeaut.pipe';
import { AddoppserComponent } from './classprogam/addoppser/addoppser.component';
import { CalserviceService } from './classprogam/calservice.service';
import { DivoperserComponent } from './classprogam/divoperser/divoperser.component';
import { SuboppserComponent } from './classprogam/suboppser/suboppser.component';
import { StudentserComponent} from './classprogam/studentser/studentser.component';
import { StudentserService } from './studentser.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentlsonComponent } from './classprogam/studentlson/studentlson.component';
import { ChildcomComponent } from './classprogam/childcom/childcom.component';
import { ParentComponent } from './classprogam/parent/parent.component';
import { SiblingComponent } from './classprogam/sibling/sibling.component';
import { RigiformComponent } from './classprogam/rigiform/rigiform.component';
import { RigimdfComponent } from './classprogam/rigimdf/rigimdf.component';
import { WebtechComponent } from './classprogam/webtech/webtech.component';
import { JavatechComponent } from './classprogam/javatech/javatech.component';
import { RouterModule } from '@angular/router'
import { TechroutingModule, routingcomponents } from './techrouting/techrouting.module';
import { ListofstujsonComponent } from './classprogam/listofstujson/listofstujson.component';
import { TdfexamComponent } from './classprogam/tdfexam/tdfexam.component';
import { BasicproComponent } from './classprogam/basicpro/basicpro.component';

 





@NgModule({
  declarations: [
    AppComponent,Prasadcomponent, Prasad2Component, CalulatorproComponent, DirectivesComponent,
     TwowaybindingComponent, CusdirectiveDirective,
      ReverseStringPipe, PipeexeComponent, PipeautPipe,
       AddoppserComponent, DivoperserComponent, SuboppserComponent,
       StudentserComponent, StudentlsonComponent, ChildcomComponent, ParentComponent,
       
       SiblingComponent, RigiformComponent, RigimdfComponent, WebtechComponent, JavatechComponent,routingcomponents, ListofstujsonComponent, TdfexamComponent, BasicproComponent,
  ],
  
  imports: [
    BrowserModule,CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule,RouterModule,TechroutingModule
  ],
  providers: [CalserviceService,StudentserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
