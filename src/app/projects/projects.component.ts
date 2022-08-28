import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  
  
  
  ngOnInit(): void {
  }
  opacity1 : boolean  = false;
  opacity2 : boolean  = false;
  opacity3 : boolean  = false;
  opacity4 : boolean  = false;
  opacity5 : boolean  = false;
  opacity6 : boolean  = false;
  
  jsState : boolean = false;
  angularState : boolean = false;
  shrink : boolean = false;
  glow : boolean = true;
  glow1 : boolean = false;
  glow2 : boolean = false;


  showAllProjects(){
    this.jsState = false;
    this.angularState = false;
    this.shrink = false;
    this.glow = true;
    this.glow1 = false;
    this.glow2 = false;
  }
  
  showAngularProjects(){
    this.angularState = false;
    this.jsState = true;
    this.shrink = true;
    this.glow = false;
    this.glow1 = true;
    this.glow2 = false;
    
  }
  showJsProjects(){
    this.jsState = this.jsState = false;
    this.angularState = true;
    this.glow = false;
    this.glow1 = false;
    this.glow2 = true;
  }


}
