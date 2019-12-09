import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
              private sanitizer: DomSanitizer,
              @Inject(MAT_ALERT_DEFAULT_CONFIG) defaultConfigs: MatAlertConfig) {
    data.message = this._handleMessage(data.message);
    this.config = Object.assign({}, defaultConfigs, data);
  }

  /**
   * Handles the message and sanitize
   */
  private _handleMessage(message: string | SafeHtml) {
    message = message.toString().replace(/(?:\r\n|\r|\n)/g, '<br/>');
    return this.sanitizer.bypassSecurityTrustHtml(message.toString());
  }
}
