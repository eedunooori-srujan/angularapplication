import { Component, OnInit } from '@angular/core';
import { Observable , } from 'rxjs';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent implements OnInit {
activeStatus:any='now'
activeStatus1:any='now'

error:any
data:any
   constructor() { }

  ngOnInit() {
  this.data=  new Observable((observer)=>{
setTimeout(()=>{
  observer.next('1 min ago')
 
},2000);
setTimeout(()=>{
  observer.next('2 min ago')
  observer.error('something went wrong')

},4000);
setTimeout(()=>{
  observer.next('3 min ago')
 },6000);
setTimeout(()=>{
  observer.next('4 min ago')
 observer.complete()

},8000);

    })
    // .subscribe((res)=>{
    //   this.activeStatus=res
    // },
    // (err)=>{
    //   this.error=err
    // }
    
    // )
 this.data.subscribe((res:any)=>{
   this.activeStatus=res
 })
this.data.subscribe((res:any)=>{
  this.activeStatus1=res
})
  }}
