import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']

})


export class ContactMeComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {


  }
  navigateToSite() {
    this.router.navigate(['/success']);
  }
}