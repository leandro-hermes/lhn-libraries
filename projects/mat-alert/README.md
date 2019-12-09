# @lhn/mat-alert

[![NPM](https://nodei.co/npm/@lhn/mat-alert.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@lhn/mat-alert/)

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/leandro-hermes/lhn-libraries?label=github&color=24292e)
![npm](https://img.shields.io/npm/v/@lhn/mat-alert?color=CB3837)
![NPM](https://img.shields.io/npm/l/@lhn/mat-alert)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/edce6ef174074698af4378e1081c62eb)](https://www.codacy.com/manual/lhn/mat-alert?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=leandro-hermes/mat-alert&amp;utm_campaign=Badge_Grade)

## Dependencies

- `@angular/core@>=6.0.0` 
- `@angular/common@>=6.0.0` 
- `@angular/material@>=6.0.0` 

## Usage

Add `MatAlertModule` to the `imports` section of the NgModule you want to use:

```typescript
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

```typescript
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
