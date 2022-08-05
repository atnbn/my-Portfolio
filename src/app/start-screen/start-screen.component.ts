import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  arrow:boolean;
  constructor() { }
  

  ngOnInit(): void {
  }
  navigatetoSection(){
    window.location.href = '#about';
  }


  startAnimation(){
    this.arrow = true;
    console.log( 'start animation',this.arrow);
  }

  stopAnimation(){
    this.arrow = false;
    console.log( 'end animation',this.arrow);
  }

}

