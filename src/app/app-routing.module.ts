import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { HomeAboutComponent } from './component/home-about/home-about.component';
import { MyskillsComponent } from './component/myskills/myskills.component';
import { WorksComponent } from './component/works/works.component';

const routes: Routes = [
  { path: 'home', component:HomeAboutComponent },
  { path: 'myskills', component:MyskillsComponent },
  { path: 'works', component:WorksComponent },
  { path: 'contact', component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
