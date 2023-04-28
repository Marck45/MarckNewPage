import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  work1 ='';
  work2 ='';
  work3 ='';
  work4 ='';
  work5 ='';
  work6 ='';

  constructor(){
    this.work1 = 'assets/works/work1.png';
    this.work2 = 'assets/works/work2.png';
    this.work3 = 'assets/works/work3.png';
    this.work4 = 'assets/works/work4.PNG';
    this.work5 = 'assets/works/work5.png';
    this.work6 = 'assets/works/work6.PNG';

  }

}
