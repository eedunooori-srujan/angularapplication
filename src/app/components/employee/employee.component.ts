import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router) { }
employeeArray:any=[]

  ngOnInit() :void{

this.employeeService.getEmployees().subscribe((res:any)=>{
  console.log((res))

  this.employeeArray=res.item
})
  }
  navigate(){
    this.router.navigate(['/create'])
  }

}
