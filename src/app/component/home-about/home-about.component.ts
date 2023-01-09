import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent implements OnInit{

  girf1 = '';

  constructor(){
    this.girf1 = 'assets/projetos/homeGirf.gif'
  }

  ngOnInit(): void {
    
  }


}
