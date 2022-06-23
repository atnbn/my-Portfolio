import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerOneComponent } from './container-one/container-one.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  {path: '', component: ContainerOneComponent},
  {path: 'imprint', component: ImprintComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
