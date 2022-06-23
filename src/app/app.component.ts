import { Component } from '@angular/core';
import * as Aos from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortfolio';

  constructor(public router: Router){

  }



  ngOnInit(){
    // Aos.init({

    //   useClassNames:false

    // }
    // );
  }
}
