import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LogComponent } from './log/log.component';
import { SignupComponent } from './signup/signup.component';
import { WirelessComponent } from './wireless/wireless.component';
import { WireComponent } from './wire/wire.component';
import{HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { GetregComponent } from './getreg/getreg.component';
import { RegisterdashboardComponent } from './registerdashboard/registerdashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    HomeComponent,
    FooterComponent,
  LogComponent,
  SignupComponent,
  WirelessComponent,
  WireComponent,
  GetregComponent,
  RegisterdashboardComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
