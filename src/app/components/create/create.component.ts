import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
data={
  firstName:'',
  middleName:'',
  lastName:'',
  age:'',

}
  ngOnInit() {
  }
  onSubmit(){
    this.employeeService.postEmployees(this.data).subscribe((res)=>{
      console.log(res)
    })
  }

}
