import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-aside-bar',
  templateUrl: './nav-aside-bar.component.html',
  styleUrls: ['./nav-aside-bar.component.css']
})
export class NavAsideBarComponent implements OnInit{

  img1:String = '';
  linkGithub = '';
  linkLinkedin = '';
  linkTwittwe = '';


  constructor(){
    this.img1 = 'assets/logo/logo.png';
    this.linkGithub = 'https://github.com/Marck45';
    this.linkLinkedin = 'https://www.linkedin.com/in/marcoscarvalho45/';
    this.linkTwittwe = 'https://twitter.com/marcosantcarva1';
  }

  ngOnInit(): void {
    
  }

}
