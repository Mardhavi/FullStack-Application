import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'employee', component: EmployeeComponent },
  {path:'add', component: AddComponent },
  {path:'update/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
