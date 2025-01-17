import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { InventoryinComponent } from './inventoryin/inventoryin.component';
import { InventoryoutComponent } from './inventoryout/inventoryout.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HistoryComponent } from './history/history.component';

import {AuthenticationService} from './authentication.service';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "main", component : MainComponent},
  {path : "inventory", component: InventoryComponent,  canActivate: 
  [AuthGuardService]},
  // {path : "inventoryin", component : InventoryinComponent},
  // {path : "inventoryout", component : InventoryoutComponent},
  {path : "history", component : HistoryComponent,  canActivate: 
  [AuthGuardService] },
  {path: "home",component: HomeComponent},
  {path: "forget_password",component: ForgetpasswordComponent},
  {path : '**', redirectTo : '/main', pathMatch :'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MainComponent]
