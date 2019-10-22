import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { MatAlertConfig } from './mat-alert-config.interface';
import { MAT_ALERT_DEFAULT_CONFIG } from './mat-alert-default-config.constant';

@Component({
  selector: 'lhn-mat-alert',
  templateUrl: './mat-alert-component.html',
  styleUrls: ['./mat-alert-component.scss'],
})
export class MatAlertComponent {

  public config: MatAlertConfig;

  constructor(@Inject(MAT_DIALOG_DATA) data: MatAlertConfig,
              sanitizer: DomSanitizer,
              @Inject(MAT_ALERT_DEFAULT_CONFIG) defaultConfigs: MatAlertConfig) {
    data.message = sanitizer.bypassSecurityTrustHtml(data.message.toString());
    this.config = Object.assign({}, defaultConfigs, data);
  }

}
