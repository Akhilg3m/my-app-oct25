import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  vehicle:any = {};

  constructor(private activatedRoute:ActivatedRoute, 
              private vehicleService:VehicleService){

    activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);

        // api call data load
        vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )

      }
    )

  }

}
