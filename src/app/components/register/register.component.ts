import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any ={};
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.authService.registerNewUser(this.registerUserData)
    .subscribe(
      res =>{
        console.log(res),
        localStorage.setItem('token', res.token);
        this.router.navigate(['/special']);
      } ,
      err => console.log(err)
    )
    console.log(this.registerUserData);
  }

}
