import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // TODO LANDING ROUTE
  {
    path: 'reserve',
    loadChildren: () => import('./pages/steps/steps.module').then((m) => m.StepsModule),
  },
  {
    path: '**',
    redirectTo: 'reserve',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
