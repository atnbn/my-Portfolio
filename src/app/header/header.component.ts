import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }
  
  ngOnInit(): void {
  }

  status : boolean = false;
  openDropDown(){
      this.status = !this.status;
  }
  routeToSection(route){
   window.location.href = route;
    this.status = false;
  
  }
}
