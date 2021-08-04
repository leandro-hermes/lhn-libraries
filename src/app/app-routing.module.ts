import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'mat-alert'},
  {
    path: 'mat-alert',
    loadChildren: () => import('./mat-alert-demo/mat-alert-demo.module').then(m => m.MatAlertDemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
