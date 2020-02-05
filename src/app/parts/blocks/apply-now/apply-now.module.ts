import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyNowRoutingModule } from './apply-now.routing';
import { ApplyNowComponent } from './apply-now.component';

@NgModule({
  imports: [
    CommonModule,
    ApplyNowRoutingModule
  ],
  declarations: [ApplyNowComponent]
})
export class ApplyNowModule { }