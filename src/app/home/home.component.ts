import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EmployeeService]
})

export class HomeComponent implements OnInit {
  employees: IEmployee[];
  

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(employeesData => this.employees = employeesData);
}


}
