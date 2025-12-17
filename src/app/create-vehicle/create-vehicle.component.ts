import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {


  vehicleForm: FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
      cost: new FormControl(),
      tyres: new FormControl(),
    }
  )

  id: string = "";

  constructor(private vehicleService: VehicleService, private activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        // api call to load data
        vehicleService.getVehicle(data.id).subscribe(
          (data: any) => {
            // patch vehicle data to the form
            this.vehicleForm.patchValue(data);
          }
        )

      }
    )

  }

  submit() {

    if (this.id) {
      // edit
      this.vehicleService.updateVehicles(this.vehicleForm.value, this.id).subscribe(
        (data: any) => {
          alert("updated successfully!!!");
          this.vehicleForm.reset();
        },
        (err: any) => {
          alert("internal server error");
        }
      )
    }
    else {
      // create
      this.vehicleService.createVehicles(this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("created successfully!!!");
          this.vehicleForm.reset();
        },
        (err: any) => {
          alert("internal server error");
        }
      )

    }



  }

}
