import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cartCount:number=0;

  constructor(private router:Router, private commonSerice:CommonService){
    commonSerice.getCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }

  logout(){
    // delete token in browser
    localStorage.removeItem("token");
    // go to login page
    this.router.navigateByUrl("/login");
  }

}
