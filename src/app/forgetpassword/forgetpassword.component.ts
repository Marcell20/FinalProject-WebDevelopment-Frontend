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


  // Forget Password Function
  updatepassword(){
    console.log(this.update_password.password)
    console.log(this.update_password.new_password)
    console.log(this.update_password.new_password_confirmation)

    if(this.update_password.password==null){
      alert('Please Fill Password Field')
    }
    if(this.update_password.new_password == null){
      alert('Please Fill New Password Field')
    }
    
    if(this.update_password.new_password_confirmation == null){
      alert('Please Fill New Password Confirmation Field')
    }
    

    this.auth.getforgetpassword(this.update_password).subscribe(
      res=>{
        console.log(res)
        if(res['code']=='BAD'){
          alert(res['message'])
        }
        else{
          this.router.navigateByUrl('/login')
        }

      },
      err=>{
        console.error(err)
      }
    )
  }

}
