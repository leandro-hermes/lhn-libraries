import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { MatAlertComponent } from './mat-alert.component';
import { MatAlert } from './mat-alert.service';
import { MAT_ALERT_DEFAULT_CONFIG, matAlertDefaultConfig } from './mat-alert-default-config.constant';

@NgModule({
  declarations: [MatAlertComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    MatAlert,
    {provide: MAT_ALERT_DEFAULT_CONFIG, useValue: matAlertDefaultConfig},
  ],
})
export class MatAlertModule { }
