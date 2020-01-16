import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../Model/employee.interface'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  values: Employees;

  constructor(
    private httpClient: HttpClient
  ) { }

  getValues(): Employees{
    return this.values;
  
  }
setValues(values:Employees): void{
 this.values = values;
}
  getemployees(): Observable<Employees> {
    return this.httpClient.get<Employees>("http://localhost:8080/employee/getemployees");
   }
 
   getEmployee(id: number):Observable<Employees>{
     return this.httpClient.get<Employees>('http://localhost:8080/employee/getEmployee/'+id);
   }
  createEmployees(newEmployees): Observable<Employees>{
    console.log('inemployeeyservice: ',newEmployees);
    return this.httpClient.post<Employees>('http://localhost:8080/employee/postEmployees' , newEmployees);

  }
deleteEmployee(id:number): Observable<Employees>{
    console.log('http://localhost:8080/home/deleteEmployee/' + id);
   return this.httpClient.delete<Employees>('http://localhost:8080/employee/deleteEmployee/' + id);
  }
 putEmployee( employees: any): Observable<any>{
   return this.httpClient.put<any>('http://localhost:8080/employee/putemployee/' + employees.id , employees);
 }
}
