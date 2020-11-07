import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SnackbarService } from 'src/app/@core/services/snackbar/snackbar.service';
import { Steps } from '../models/steps';
import { Store } from '../models/store';

const APPOINTMENT_STATE_KEY = 'hinatastepsform';

@Injectable()
export class StepsService {
  //TODO
  appointment: { where?: any; when?: any; details?: any } = {};
  private stepIndexSubject = new BehaviorSubject(1);
  activeStepIndex$ = this.stepIndexSubject.asObservable();

  constructor(private snackbarService: SnackbarService) {
    fromEvent(window, 'beforeunload').pipe(tap(() => this.saveAppointmentState())).subscribe();
    this.getState();
    this.forwardSteps();
  }

  get appointmentSteps() {
    return [
      {
        title: 'Where',
        route: Steps[Steps.WHERE].toLowerCase(),
      },
      {
        title: 'When',
        route: Steps[Steps.WHEN].toLowerCase(),
      },
      {
        title: 'Details',
        route: Steps[Steps.DETAILS].toLowerCase(),
      },
      {
        title: 'Done',
        route: Steps[Steps.DONE].toLowerCase(),
      },
    ];
  }

  saveStepStore(store: Store) {
    console.log(`save step ${Steps[Steps.WHERE]}`);
    this.appointment.where = store;
    this.stepIndexSubject.next(2);
  }

  get canShowStepWhen(): boolean {
    return !!this.appointment.where;
  }

  saveStepSchedule(schedule: any) {
    console.log(`save step ${Steps[Steps.WHEN]}`);
    this.appointment.when = schedule;
    this.stepIndexSubject.next(3);
  }

  get canShowStepDetails(): boolean {
    return !!this.appointment.when;
  }

  saveStepCustomer(customer: any) {
    console.log(`save step ${Steps[Steps.DETAILS]}`);
    this.appointment.details = customer;
    this.stepIndexSubject.next(4);
  }

  get canShowStepDone(): boolean {
    return !!this.appointment.where && !!this.appointment.when && !!this.appointment.details;
  }

  private saveAppointmentState() {
    console.log('save state');
    window.sessionStorage.setItem(APPOINTMENT_STATE_KEY, JSON.stringify(this.appointment));
  }

  private getState() {
    const state = window.sessionStorage.getItem(APPOINTMENT_STATE_KEY);

    if (state) {
      console.log('get current state');
      this.appointment = JSON.parse(state);
    }
  }

  private forwardSteps() {
    let hasBeenForwarded = false;

    if (this.canShowStepWhen) {
      this.stepIndexSubject.next(2);
      hasBeenForwarded = true;
    }

    if (this.canShowStepDetails) {
      this.stepIndexSubject.next(3);
      hasBeenForwarded = true;
    }

    if (this.canShowStepDone) {
      this.stepIndexSubject.next(4);
      hasBeenForwarded = true;
    }

    if (hasBeenForwarded) {
      this.snackbarService.showSnackbar('Continuing appointment ...');
    }
  }
}
