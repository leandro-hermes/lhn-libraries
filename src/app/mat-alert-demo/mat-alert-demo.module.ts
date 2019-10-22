import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAlertDemoRoutingModule } from './mat-alert-demo-routing.module';
import { MatAlertDemoComponent } from './mat-alert-demo.component';


@NgModule({
  declarations: [MatAlertDemoComponent],
  imports: [
    CommonModule,
    MatAlertDemoRoutingModule
  ]
})
export class MatAlertDemoModule { }
