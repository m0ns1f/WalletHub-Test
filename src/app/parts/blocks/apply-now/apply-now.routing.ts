import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyNowComponent } from './apply-now.component';


const routes: Routes = [
  {
    path: '',
    component: ApplyNowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyNowRoutingModule { }
