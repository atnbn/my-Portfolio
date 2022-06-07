import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
  
})


export class ContactMeComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }


  ngOnInit(): void {

  }
 
  confirmData(){
    alert('Thank you The email has been sent')
  }
}
