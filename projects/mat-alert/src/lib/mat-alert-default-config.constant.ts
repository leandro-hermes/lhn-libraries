import { InjectionToken } from '@angular/core';

import { MatAlertConfig } from './mat-alert-config.interface';

export const MAT_ALERT_DEFAULT_CONFIG = new InjectionToken<MatAlertConfig>('mat-alert.config');

export const matAlertDefaultConfig: Partial<MatAlertConfig> = {
  buttonText: 'Ok',
  buttonTheme: null,
  raisedButton: false,
  autoFocus: true,
};
