import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MatAlertComponent } from './mat-alert.component';
import { MatAlert } from './mat-alert.service';
import { MAT_ALERT_DEFAULT_CONFIG, matAlertDefaultConfig } from './mat-alert-default-config.constant';

@NgModule({
  declarations: [MatAlertComponent],
  entryComponents: [MatAlertComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [
    MatAlert,
    {provide: MAT_ALERT_DEFAULT_CONFIG, useValue: matAlertDefaultConfig},
  ],
})
export class MatAlertModule {
}
