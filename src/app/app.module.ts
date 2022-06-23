import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerOneComponent } from './container-one/container-one.component';
import { MYSKILLSComponent } from './myskills/myskills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerOneComponent,
    MYSKILLSComponent,
    ProjectsComponent,
    AboutComponent,
    ContactMeComponent,
    FooterComponent,
    ImprintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
