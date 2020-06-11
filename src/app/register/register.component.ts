import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayLoad } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: TokenPayLoad = {
    name:'',
    email:'',
    password:'',
    password_confirmation:''
  }
  constructor(private auth: AuthenticationService, private router: Router) { }

  register(){
    console.log(this.credentials)
    this.auth.register(this.credentials).subscribe(
      (res)=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/login')
      },
      err=>{
        console.error(err)
      }
    )
  }

}
