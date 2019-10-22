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

  constructor(@Inject(MAT_DIALOG_DATA) public config: MatAlertConfig,
              sanitizer: DomSanitizer,
              @Inject(MAT_ALERT_DEFAULT_CONFIG) defaultConfigs: MatAlertConfig) {
    Object.assign(this.config, defaultConfigs, this.config);
    this.config.message = sanitizer.bypassSecurityTrustHtml(this.config.message.toString());
  }

}
