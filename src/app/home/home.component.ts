import { Component, OnInit } from '@angular/core';
import { HomeService, getuserdata } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userdata = new getuserdata();
  constructor(private home: HomeService) { }
  
  ngOnInit(){
    console.log("heytayo")
    this.home.getUserData().subscribe(
      (data)=>{
        console.log(data)
        this.userdata = data['user']
      },
      err=>{
        console.error(err)
      }
    )
  }

}
