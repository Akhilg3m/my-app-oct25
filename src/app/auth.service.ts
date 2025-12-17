import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private httpClient:HttpClient) { }

  login(user:any){
    return this.httpClient.post("https://dummyjson.com/auth/login",user)
  }
}
