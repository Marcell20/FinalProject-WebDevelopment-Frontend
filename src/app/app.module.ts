import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
import {httpInterceptProviders} from './http-interceptors/'


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { InventoryinComponent } from './inventoryin/inventoryin.component';
import { InventoryoutComponent } from './inventoryout/inventoryout.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HistoryComponent } from './history/history.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import {AuthenticationService} from './authentication.service';
import { from } from 'rxjs';
import { InventoryService } from './inventory/inventory.service';
import { HomeComponent } from './home/home.component';
import { HistoryService } from './history/history.service';
import { AuthGuardService } from './auth-guard.service';
import { HomeService } from './home/home.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import {AuthGuardService} from './auth-guard.service'; 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterComponent,
    InventoryinComponent,
    InventoryoutComponent,
    InventoryComponent,
    HistoryComponent,
    SidebarComponent,
    HomeComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthenticationService,httpInterceptProviders,InventoryService,HistoryService,AuthGuardService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
