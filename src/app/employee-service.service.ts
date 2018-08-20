import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';
// Import Http & Response from angular HTTP module
import { Http, Response } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  private apiURL='http://localhost:5355/api/v1/employees/';
    // Inject Angular http service
    constructor(private _http: Http) { }

    // Notice the method return type is Observable<IEmployee[]>
    getEmployees(): Observable<IEmployee[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get(this.apiURL+'retrieveAll')
            .map((response: Response) => <IEmployee[]>response.json());
    }
}


