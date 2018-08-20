import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api-service.service';


@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css']
})
export class APITestComponent implements OnInit {

  private employees: Array<object> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.apiService.getEmployee().subscribe((data: Array<object>)=>{
      this.employees=data;
      console.log(data);
    }
  );
  }
}
