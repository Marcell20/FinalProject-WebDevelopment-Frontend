import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { ajax } from 'rxjs/ajax';


// export interface UserDetails{
//   name: string
//   email : string
//   password : string
//   password_confirmation : string
// }

interface TokenResponse{ 
  token: string
}

export interface TokenPayLoad{
  name: string
  email : string
  password : string
  password_confirmation : string
}

export interface TokenPayload2{
  email:string
  password:string
}
// const header={
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'Access-Control-Allow-Headers': 'Content-Type',
// }

// let headers = new HttpHeaders();
// headers = headers.set('Content-Type', 'application/json; charset=utf-8');

@Injectable()
export class AuthenticationService {
  private token: string
  constructor(private http: HttpClient, private router: Router) { }

  public saveToken(token: string): void{
    localStorage.setItem('userToken',token)
    this.token = token
  }

  public getToken():string{
    if(!this.token){
      this.token = localStorage.getItem('userToken')
    }
    return this.token
  }

  // private getUserDetails(): UserDetails{
  //   const token = this.getToken()
  //   let payload
  //   if(token){
  //     payload = token.split('.')[1]
  //     payload = window.atob(payload)
  //     return JSON.parse(payload)
  //   }
  //   else{
  //     return null
  //   }
  // }

  public isLoggedIn(){
    return this.getToken() !== null;
  }

  public register(user: TokenPayLoad): Observable<any>{
    const base = this.http.post('https://api.invform.me/register',user)
      const request = base.pipe(
      map((data: TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  // public register(user: TokenPayLoad): Observable<any>{
  //   const regis = this.http.post('https://api.invform.me/register',user)
  //   const requestOptions ={
  //     headers : new Headers(header),
  //   };
  //   return this.http.post(regis, requestOptions)
  // }

  
  public login(user: TokenPayload2): Observable<any>{
    const base = this.http.post('https://api.invform.me/login',user)
    const request = base.pipe(
      map((data: TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  // public login(user: TokenPayload2): Observable<any>{
  //   const base = this.http.post('http://httpbin.org/post',user)
  //   const request = base.pipe(
  //     map((data: TokenResponse)=>{
  //       if(data.token){
  //         this.saveToken(data.token)
  //       }
  //       return data
  //     })
  //   )
  //   return request
  // }



  // public logout(): void{
  //   this.token = ''
  //   window.localStorage.removeItem('userToken')
  //   this.router.navigateByUrl('/main')
  // }
  public getlogout(){
    this.token = ''
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/main');
    return this.http.get('https://api.invform.me/logout');
  }
}
