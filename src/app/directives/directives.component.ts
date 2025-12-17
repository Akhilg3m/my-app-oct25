import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {


  state:string = "telangana";
  city:string = "HYDERABAD";
  now:any = new Date();


  age:number = 7;

  names:string[] = ["ram", "suresh", "john"];

  products:any = [
    { name:'pen', price:200},
    { name:'pencil', price:20},
    { name:'mobile', price:10000},
  ]


  users:any = ""

  mails:any = [
    { name:'pen', isCompleted:true, price:200},
    { name:'pencil', isCompleted:false, price:20},
    { name:'mobile', isCompleted:true, price:10000},
  ]


}
