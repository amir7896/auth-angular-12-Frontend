import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
 
  constructor(private _authService: AuthService,
    private router: Router){}

    canActivate():boolean{
      if(this._authService.loggedIn()){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
    }
  
}
