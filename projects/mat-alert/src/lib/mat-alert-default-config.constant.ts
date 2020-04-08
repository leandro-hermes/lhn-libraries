import { MatAlertConfig } from './mat-alert-config.interface';
import { InjectionToken } from '@angular/core';

export const MAT_ALERT_DEFAULT_CONFIG = new InjectionToken<MatAlertConfig>('mat-alert.config');

export const matAlertDefaultConfig: Partial<MatAlertConfig> = {
  buttonText: 'Ok',
  buttonTheme: null,
  raisedButton: false,
  autoFocus: true,
};
