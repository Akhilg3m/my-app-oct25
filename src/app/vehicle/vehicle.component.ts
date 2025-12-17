import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  column:string = "";
  order:string = "";
  age:number = 0;
  ages:number[] = [];
  role:string = String(localStorage.getItem('role'));

  vehicles:Vehicle[] = [];

  constructor(private vehicleService:VehicleService){

    vehicleService.getVehicles().subscribe(
      (data:Vehicle[])=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }

    )
  }

  term:string = "";

  filterVehicles(){

    this.vehicleService.filterVehicles(this.term).subscribe(
      (data:any)=>{
       this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )

  }

  SortVehicles(){

    this.vehicleService.sortVehicles(this.column, this.order).subscribe(
      (data:any)=>{
       this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )

  }

  deleteVehicle(id:string){

    this.vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )

  }


}
