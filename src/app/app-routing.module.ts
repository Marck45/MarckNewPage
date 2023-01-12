import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAboutComponent } from './component/home-about/home-about.component';
import { MyskillsComponent } from './component/myskills/myskills.component';
import { WorksComponent } from './component/works/works.component';

const routes: Routes = [
  { path: 'home', component:HomeAboutComponent },
  { path: 'myskills', component:MyskillsComponent },
  { path: 'works', component:WorksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
