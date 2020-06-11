import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private auth: AuthenticationService, private router: Router, private httpClient: HttpClient) { }

    logout(){
      this.auth.getlogout().subscribe(
        ()=>{
          this.router.navigateByUrl('/main')
        },
        err=>{
          console.error(err)
          this.router.navigateByUrl('/login')
        }
      )
    }

  }


