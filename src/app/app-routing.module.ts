import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log/log.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { WirelessComponent } from './wireless/wireless.component';
import { WireComponent } from './wire/wire.component';
import{RdashboardComponent} from './rdashboard/rdashboard.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  
  {path:'',redirectTo:'navbar',pathMatch:'full'},
 //{path:'',component:NavbarComponent},
    {path:'login', component:LogComponent},
    {path:'signup', component:SignupComponent},
    {path:'wireless', component:WirelessComponent},
    {path:'wire',component:WireComponent},
    {path:'dashboard',component:RdashboardComponent},
    {path:"update/:id",component:UpdateuserComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[NavbarComponent,HomeComponent,FooterComponent,LogComponent,
SignupComponent,WirelessComponent,WireComponent,RdashboardComponent,UpdateuserComponent]