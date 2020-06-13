import { Component, OnInit } from '@angular/core';
import { AuthenticationService,  TokenPayload2 } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  credentials: TokenPayload2 = {
    email:'',
    password:'',
  }
  constructor(private auth: AuthenticationService, private router: Router) { }

  login(){
    // console.log(this.credentials)
    this.auth.login(this.credentials).subscribe(
      
      (res)=>{
        
        // console.log(res.access_token)
        this.auth.saveToken(res.access_token)
        this.auth.getToken()
        this.router.navigateByUrl('/inventory')
      },
      err=>{
        console.error(err)
      }
    )
  }
}
