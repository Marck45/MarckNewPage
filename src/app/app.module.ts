import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavAsideBarComponent } from './component/nav-aside-bar/nav-aside-bar.component';
import { HomeAboutComponent } from './component/home-about/home-about.component';
import { MyskillsComponent } from './component/myskills/myskills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAsideBarComponent,
    HomeAboutComponent,
    MyskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
