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

  // Login function 
  login(){
    // console.log(this.credentials)
    if(this.credentials.password==''){
      alert('Please Fill Password Field')
    }
    this.auth.login(this.credentials).subscribe(
      
      (res)=>{

        console.log(res['code'])
        if (res['code']=='BAD'){
          // this.router.navigateByUrl('/login')
          alert(res['message'])
        }
        else{
          this.router.navigateByUrl('/inventory')
          this.auth.saveToken(res.access_token)
          this.auth.getToken()
        }
        // console.log(res.access_token)
      },
      err=>{
        console.error(err)
      }
    )
  }
}
