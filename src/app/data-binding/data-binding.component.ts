import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  age:number = 20;
  name:string = "John";
  

  message:string = "hi";

  submit(){
    alert("success");
  }

  
}
