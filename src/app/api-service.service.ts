import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://localhost:5355/api/v1/employees';

  constructor(private httpClient: HttpClient) { }

  getEmployee() {
    return this.httpClient.get(this.API_URL+ '/retrieveAll');
  }
  createEmployee(data){
    return  this.httpClient.post(this.API_URL,data);
}
}
