import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { MatAlertComponent } from './mat-alert.component';
import { MatAlertConfig } from './mat-alert-config.interface';

@Injectable()
export class MatAlert {

  constructor(private dlg: MatDialog) { }

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
    config.message = message;
    return this.dlg.open(MatAlertComponent, {
      minWidth: 300,
      data: config,
      role: 'alertdialog',
      disableClose,
    }).afterClosed();
  }
}
