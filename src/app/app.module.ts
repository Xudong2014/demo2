import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurbusinessComponent } from './ourbusiness/ourbusiness.component';
import { HomeComponent } from './home/home.component';
import { OurprocessComponent } from './ourprocess/ourprocess.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    OurbusinessComponent,
    HomeComponent,
    OurprocessComponent,
    CareersComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
