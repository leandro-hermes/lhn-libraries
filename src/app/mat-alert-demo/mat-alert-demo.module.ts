import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
  ],
})
export class MatAlertDemoModule { }
