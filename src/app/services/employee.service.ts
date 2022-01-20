import { Injectable } from '@angular/core';
import {HttpClient, } from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getEmployees(){
    return this.http.get<any>('http://localhost:3000/posts/1')
   
  } 
  postEmployees(data:any){
    return this.http.post<any>('http://localhost:3000/posts/1'.data)

  }
}
