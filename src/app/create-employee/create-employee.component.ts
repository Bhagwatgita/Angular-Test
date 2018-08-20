import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { IEmployee } from '../iemployee';
import {ApiService} from '../api-service.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  myforms:FormGroup;
  emp:Employee;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.myforms = new FormGroup({

    name: new FormControl('', Validators.compose ([
        Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+'),
    ])),
      gender:new FormControl('', Validators.compose ([
        Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    salary:new FormControl('', Validators.compose ([
      Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
  ])),
     address:new FormControl('', Validators.compose ([
        Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
])),
    email:new FormControl('', Validators.compose ([
        Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
])),
    dob:new FormControl('', Validators.compose ([
      Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
])),
    occupation:new FormControl('', Validators.compose ([
      Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
])),
  idType:new FormControl('', Validators.compose ([
    Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
])),
walletNumber:new FormControl('', Validators.compose ([
  Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
])),
mobileNumber:new FormControl('', Validators.compose ([
  Validators.required,Validators.minLength(4),Validators.pattern('[\\w\\-\\s\\/]+')
]))
    });

    return this.createEmployee();
  }

  createEmployee(){
    //emp= new Employee();
    this.apiService.createEmployee(this.myforms).subscribe((response) => {
        console.log(response);
    });
    }
    static parse(json: string) {
      var data = JSON.parse(json);
       return new Employee(data.Name, data.Gender,data.Salary,
      data.Address,data.Email,data.Dob,
      data.Occupation,data.IdType,
      data.WalletNumber,data.MobileNumber
      );
  }
    
  
  onSend = function (log) {
    console.log(log);
    return this.createEmployee(log);

  }

}

