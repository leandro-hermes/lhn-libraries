import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { MatAlertComponent } from './mat-alert.component';
import { MatAlertConfig } from './mat-alert-config.interface';
import { MAT_ALERT_DEFAULT_CONFIG } from './mat-alert-default-config.constant';

@Injectable()
export class MatAlert {

  constructor(private dlg: MatDialog,
              @Inject(MAT_ALERT_DEFAULT_CONFIG) private defaultConfigs: MatAlertConfig) { }

  /**
   * Opens an alert dialog
   *
   * @param title Title for the alert
   * @param message Message body. Can be an additional description
   * @param config Configuration for the alert
   * @param disableClose Flag for disable closing the alert clicking outside or pressing Escape
   * @return Observable<void> The MatDialog's `afterClosed()` observable
   */
  public show(title: string, message: string = '', config: Partial<MatAlertConfig> = {}, disableClose = false): Observable<void> {
    config.title = title;
    config.message = message || '';
    const cfg: MatDialogConfig = Object.assign({
      minWidth: 300,
      data: config,
      role: 'alertdialog',
      disableClose,
      hasBackdrop: config.hasBackdrop ?? true,
    }, this.defaultConfigs, config);
    return this.dlg.open(MatAlertComponent, cfg).afterClosed();
  }
}
