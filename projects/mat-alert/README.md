# @lhn/mat-alert

[![NPM](https://nodei.co/npm/@lhn/mat-alert.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@lhn/mat-alert/)

![npm](https://img.shields.io/npm/v/@leandrohermes/mat-alert?color=blue)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/edce6ef174074698af4378e1081c62eb)](https://www.codacy.com/manual/lhn/mat-alert?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=leandro-hermes/mat-alert&amp;utm_campaign=Badge_Grade)

## Dependencies

`@angular/core@>=5.0.0`
 
`@angular/common@>=5.0.0`
 
`@angular/material@>=5.0.0` 

# Usage

Add `MatAlertModule` to the `imports` section of the NgModule you want to use:

```angular2
import { MatAlertModule } from '@lhn/mat-alert';
 
@NgModule({
 // ...
 imports: [
   // ...
   MatAlertModule,
 ]
})
```

Inject the service into the component:

```angular2
import { MatAlert } from '@lhn/mat-alert';
 
@Component({
  // ...
})
export class AppComponent {
  constructor(private alert: MatAlert) {}
  // ..

  public showAlert() {
    this.alert.show('Message title', 'Message content (<em>supports HMTL</em>)', {
      buttonText: 'Great!',
      buttonTheme: 'accent',
      raisedButton: true,
    });
  }
}
```
