import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanLoadStepGuard } from './@shared/guards/can-load-step.guard';
import { Steps } from './@shared/models/steps';
import { StepsComponent } from './steps.component';

const routes: Routes = [
  {
    path: '',
    component: StepsComponent,
    children: [
      {
        path: Steps[Steps.WHERE].toLowerCase(),
        loadChildren: () => import('./maps/maps.module').then((m) => m.MapsModule),
      },
      {
        path: Steps[Steps.WHEN].toLowerCase(),
        loadChildren: () => import('./dates/dates.module').then((m) => m.DatesModule),
        data: { expected: 'schedule' },
        canLoad: [ CanLoadStepGuard ],
      },
      {
        path: Steps[Steps.DETAILS].toLowerCase(),
        loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
        data: { expected: 'customer' },
        canLoad: [ CanLoadStepGuard ],
      },
      {
        path: Steps[Steps.DONE].toLowerCase(),
        loadChildren: () => import('./complete/complete.module').then((m) => m.CompleteModule),
        data: { expected: [ 'store', 'schedule', 'customer' ] },
        canLoad: [ CanLoadStepGuard ],
      },
      {
        path: '',
        redirectTo: Steps[Steps.WHERE].toLowerCase(),
      },
      {
        path: '**',
        redirectTo: Steps[Steps.WHERE].toLowerCase(),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class StepsRoutingModule {}
