import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { MatAlertDemoRoutingModule } from './mat-alert-demo-routing.module';
import { MatAlertDemoComponent } from './mat-alert-demo.component';
import { MatAlertModule } from 'mat-alert';

@NgModule({
  declarations: [MatAlertDemoComponent],
  imports: [
    CommonModule,
    MatAlertDemoRoutingModule,
    MatButtonModule,
    MatAlertModule,
  ],
})
export class MatAlertDemoModule { }
