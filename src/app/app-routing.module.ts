import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAboutComponent } from './component/home-about/home-about.component';
import { MyskillsComponent } from './component/myskills/myskills.component';

const routes: Routes = [
  { path: 'home', component:HomeAboutComponent },
  { path: 'myskills', component:MyskillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
