import { Component, OnInit } from '@angular/core';
import { AuthenticationService, passwordupdate } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  update_password = new passwordupdate();
  constructor(private auth: AuthenticationService, private router: Router) { }

  updatepassword(){
    this.auth.getforgetpassword(this.update_password).subscribe(
      res=>{
        // console.log(res)
        // this.auth.saveToken(res.access_token)
        this.auth.getToken()
        this.router.navigateByUrl('/login')
      },
      err=>{
        console.error(err)
      }
    )
  }

}
