import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControlName, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rigimdf',
  templateUrl: './rigimdf.component.html',
  styleUrls: ['./rigimdf.component.css']
})
export class RigimdfComponent {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Name: ['prasadreddy', [Validators.required, Validators.minLength(5),
         Validators.maxLength(12),Validators.pattern('[a-z]+')]],
      Contact: [],
      Email: [],
      Address: this.formBuilder.group({
        Street: [],
        City: [],
        Postalcode: ['12345']
      })

    })
  }
  onSubmit() {
    console.log(this.userForm.value)
  }






}
