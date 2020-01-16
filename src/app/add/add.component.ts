import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../Service/employee.service';
import { Employees } from '../Model/employee.interface';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employees: Employees;
  employee:Employees={
  id: 0,
  username:'',
  description:'',
  }
  constructor(
    private router: Router,
    private employeeService: EmployeeService,

  ) { }

  createDetails(fName): void {
    fName.value.id= +(fName.value.id);
    this.employeeService.createEmployees(fName.value).subscribe( employee =>{
    })
  }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/employee']);
  }
  
}
