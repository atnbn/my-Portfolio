import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  mouseovered:boolean =false ;
  constructor() { }
  

  ngOnInit(): void {
  }
  navigatetoSection(){
    window.location.href = '#about';
  }



}

