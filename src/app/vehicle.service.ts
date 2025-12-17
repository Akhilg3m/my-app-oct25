import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {


  // baseUrl:string = "/assets/vehicles.json";
  baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private httpClient:HttpClient) { }

  getVehicles(){
    return this.httpClient.get<Vehicle[]>(this.baseUrl);
  }

  getVehicle(id:string){
    return this.httpClient.get(this.baseUrl+"/"+id);
  }

  filterVehicles(term:string){
     return this.httpClient.get(this.baseUrl+"?filter="+term);
  }

  sortVehicles(column:string, order:string){
     return this.httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  createVehicles(vehicle:any){
    return this.httpClient.post(this.baseUrl,vehicle);
  }

  updateVehicles(vehicle:any, id:string){
    return this.httpClient.put(this.baseUrl+"/"+id,vehicle);
  }

  deleteVehicle(id:string){
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }



}


// ng-content    ng-conatiner     ng-template