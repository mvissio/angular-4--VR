import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from "./app.routing";

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, FrutaComponent, EmpleadoComponent, NavbarComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule, FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
