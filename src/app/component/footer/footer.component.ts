import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  img1 = '';
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
