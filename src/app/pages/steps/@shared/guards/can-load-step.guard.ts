import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Steps } from '../models/steps';
import { StepsService } from '../services/steps.service';

@Injectable()
export class CanLoadStepGuard implements CanLoad {
  constructor(private router: Router, private service: StepsService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const path = route.path.toUpperCase();
    let canLoad = true;
    console.log(`CAN LOAD STEP '${path}'?`);

    if (path === Steps[Steps.WHEN].toString()) {
      canLoad = this.service.canShowStepWhen;
    }

    if (path === Steps[Steps.DETAILS].toString()) {
      canLoad = this.service.canShowStepDetails;
    }

    if (path === Steps[Steps.DONE].toString()) {
      canLoad = this.service.canShowStepDone;
    }

    if (!canLoad) {
      this.router.navigate([ '' ]);
    }

    return canLoad;
  }
}
