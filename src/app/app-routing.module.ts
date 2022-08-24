import { NgModule } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ImprintComponent } from './imprint/imprint.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { SuccesComponent } from './succes/succes.component';

const routes: Routes = [
  {path: '', component: StartScreenComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'success', component: SuccesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
