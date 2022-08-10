import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mouseovered:boolean = false;
  mouseovered1:boolean = false;
  mouseovered2:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
