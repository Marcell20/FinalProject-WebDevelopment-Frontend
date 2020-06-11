import { Injectable, Injector } from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler} from "@angular/common/http";
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor{
    constructor(private injector: Injector){}
    
    intercept(request: HttpRequest<any>, next: HttpHandler){
        let authservice = this.injector.get(AuthenticationService)
        let tokenizedReq = request.clone({
            setHeaders:{
                Authorization: `Bearer ${authservice.getToken()}`
            }
        })
        return next.handle(tokenizedReq)
    }
}