import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_ALERT_DEFAULT_CONFIG, matAlertDefaultConfig } from './mat-alert-default-config.constant';

import { MatAlertComponent } from './mat-alert.component';
import { MatAlert } from './mat-alert.service';

@NgModule({
  declarations: [MatAlertComponent],
  entryComponents: [MatAlertComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    MatAlert,
    { provide: MAT_ALERT_DEFAULT_CONFIG, useValue: matAlertDefaultConfig },
  ],
})
export class MatAlertModule {}
