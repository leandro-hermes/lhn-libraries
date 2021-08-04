import { Component } from '@angular/core';
import { MatAlert } from 'mat-alert';

@Component({
  selector: 'app-mat-alert-demo',
  templateUrl: './mat-alert-demo.component.html',
  styleUrls: ['./mat-alert-demo.component.scss'],
})
export class MatAlertDemoComponent {
  constructor(private alertSvc: MatAlert) { }

  public showAlert() {
    this.alertSvc.show('Alert title', 'Alert message goes here', {
      buttonTheme: 'accent',
      raisedButton: true,
      buttonText: 'Okay',
    });
  }

  public toggleDarkTheme(active: boolean): void {
    document.body.classList.toggle('dark-theme', active);
  }

  public isDarkThemeActive() {
    return document.body.classList.contains('dark-theme');
  }
}
