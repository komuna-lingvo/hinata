import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private subject: Subject<string> = new Subject();
  trigger$: Observable<string> = this.subject.asObservable();

  constructor() {}

  showSnackbar(message: string) {
    if (message == null) {
      return;
    }

    this.subject.next(message);
  }
}
