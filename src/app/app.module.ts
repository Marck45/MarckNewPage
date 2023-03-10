import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps'
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavAsideBarComponent } from './component/nav-aside-bar/nav-aside-bar.component';
import { HomeAboutComponent } from './component/home-about/home-about.component';
import { MyskillsComponent } from './component/myskills/myskills.component';
import { WorksComponent } from './component/works/works.component';
import { ContactComponent } from './component/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    NavAsideBarComponent,
    HomeAboutComponent,
    MyskillsComponent,
    WorksComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
