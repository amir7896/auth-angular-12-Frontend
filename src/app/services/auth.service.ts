import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl ="http://localhost:3000/api/register"
  private _loginUrl    ="http://localhost:3000/api/login"
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  // ==============
  // Register User
  // ==============
  registerNewUser(user:any){
    return this.httpClient.post<any>(this._registerUrl,user);
  }
  // ===========
  // Login User
  // ===========
  logInUser(user:any){
    return this.httpClient.post<any>(this._loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logOutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/events'])

  }
}
