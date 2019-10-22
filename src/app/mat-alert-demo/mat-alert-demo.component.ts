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
    this.alertSvc.show('Título', 'Mensagem', {
      buttonTheme: 'accent',
      raisedButton: true,
      buttonText: 'ouquei',
    });
  }
}
