import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { Employees } from '../Model/employee.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employees;

  constructor( 
    private employeeService : EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employeeService.getemployees().subscribe(employees =>{
      this.employees = employees;
    });
  }
  onAdd(){
    this.router.navigate(['/add']);
  }
  onDelete(id: number){
    console.log("deleted: ", id);
    this.employeeService.deleteEmployee(id).subscribe(employees =>{
      //this.detail = details;
      this.employeeService.getemployees().subscribe(employees =>{
        this.employees = employees;
      });
    });
  }
  onUpdate(employee: any){
    console.log("indisplay.component: , employee", employee);
    this.employeeService.setValues(employee);
    this.router.navigate(['/update', employee.id]);
  }

}
