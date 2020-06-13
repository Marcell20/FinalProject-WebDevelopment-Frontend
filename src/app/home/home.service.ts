import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, from} from 'rxjs';

export class getuserdata{
  name : any
  email : any
}

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { 

  }

  getUserData(){
    return this.http.get('https://api.invform.me/userdata')
  }
}
