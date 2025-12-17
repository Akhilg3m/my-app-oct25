import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private commonService:CommonService){}

  addToCart(){
    this.commonService.setCount();
  }

}
