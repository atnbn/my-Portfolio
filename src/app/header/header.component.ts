import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() index = false;

  constructor() { }
  
  ngOnInit(): void {
  }

  openDropDown(){
      this.index = true;

        console.log('hallo')
      
  }

}
