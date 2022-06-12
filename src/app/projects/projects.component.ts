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

  jsState : boolean = false;
  angularState : boolean = false;

  showJsProjects(){
    this.jsState = this.jsState = false;
    this.angularState = true;
    console.log('Showjsprojects')
  }

  showAngularProjects(){
    this.angularState = false;
    this.jsState = true;
  }

  showAllProjects(){
    this.jsState = false;
    this.angularState = false;
  }
  


}
