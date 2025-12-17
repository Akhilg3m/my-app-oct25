import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })
  constructor(private authService:AuthService, 
    private router:Router){}

  login() {
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login success");
        // store token in browser
        localStorage.setItem("token",data.accessToken);
        // localStorage.setItem("token",data.role);
        localStorage.setItem("role","user");
        // go to dashboard
        this.router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("invalid credentials");
      }
    )

  }
}
