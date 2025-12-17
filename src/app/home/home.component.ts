import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public name:string = "abc";

  constructor(private vehicleService:VehicleService){
    alert("constructor");
  }

  submit(){
    alert("submit");
  }

  // properits/variables

  // constructor

  // life cycle hooks

  // custom methods

}
