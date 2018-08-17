import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  myform:FormGroup;
  // submitted = false;
  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      first_name: new FormControl('', Validators.compose ([
          Validators.required,
        Validators.minLength(4),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
     
      email: new FormControl('', Validators.compose ([
          Validators.required,
        Validators.minLength(3),
        Validators.email
      ])),
      phone: new FormControl('', Validators.compose ([
        Validators.required,
      Validators.minLength(3),
      Validators.pattern('[\\w\\-\\s\\/]+')
    ]))
      

    });
  }

  // textValidator(control) {
  //   if (control.value.length < 3) {
  //     return {'last_name': true};
  //   }

  // }
  onSend = function (log) {
    console.log(log)

  }
  get first_name() { return this.myform.get('first_name'); }
  get email() { return this.myform.get('email'); }

  // get f() { return this.myform.controls; }
 
    // onSubmit() {
    //     this.submitted = true;
 
    //     // stop here if form is invalid
    //     if (this.myform.invalid) {
    //         return;
    //     }


}
