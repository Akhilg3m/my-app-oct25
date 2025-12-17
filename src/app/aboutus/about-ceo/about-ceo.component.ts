import { Component } from '@angular/core';
import { VehicleService } from 'src/app/vehicle.service';

@Component({
  selector: 'app-about-ceo',
  templateUrl: './about-ceo.component.html',
  styleUrls: ['./about-ceo.component.css'],
  providers:[VehicleService]
})
export class AboutCeoComponent {

}
