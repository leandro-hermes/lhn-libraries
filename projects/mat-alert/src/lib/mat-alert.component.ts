import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatAlertConfig } from './mat-alert-config.interface';
import { MAT_ALERT_DEFAULT_CONFIG } from './mat-alert-default-config.constant';

@Component({
  selector: 'lhn-mat-alert',
  template: `
    <h1 mat-dialog-title>{{config.title}}</h1>
    <mat-dialog-content class="mat-typography" *ngIf="config.message">
      <h4 [innerHTML]="config.message"></h4>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button [class.mat-raised-button]="config.raisedButton"
              [color]="config.buttonTheme"
              mat-button
              mat-dialog-close
              type="button">
        {{config.buttonText}}
      </button>
    </mat-dialog-actions>
  `,
  styles: [],
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
