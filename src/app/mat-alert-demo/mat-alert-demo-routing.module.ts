import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatAlertDemoComponent } from './mat-alert-demo.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MatAlertDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatAlertDemoRoutingModule {
}
