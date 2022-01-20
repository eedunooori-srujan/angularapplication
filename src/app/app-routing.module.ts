import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './compo/navbar/navbar.component';
import { CreateComponent } from './components/create/create.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent}
,
{path:'employee',component:EmployeeComponent},
{path:'create',component:CreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
