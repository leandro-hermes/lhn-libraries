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
   */
  public show(title: string, message: string = '', config: any = MatAlertConfig): Observable<void> {
    config.title = title;
    config.message = message;
    return this.dlg.open(MatAlertComponent, {
      minWidth: 300,
      data: config,
    }).afterClosed();
  }
}
