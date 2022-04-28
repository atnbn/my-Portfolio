import { Component, OnInit } from '@angular/core';

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
 

  submitForm(){
    //grab all the fields and their values
    alert('im submitting the form')

  }
 
}
