import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, delay, tap } from 'rxjs/operators';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: [ './snackbar.component.scss' ],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  directions = Direction;
  kinds = Kind;
  direction: Direction = Direction.BOTTOM;
  kind: Kind = Kind.NEUTRAL;
  show: boolean = false;
  isSnackbarVisible: boolean = false;
  message: string;
  private duration: number = 3500;
  private subscriber: Subscription;

  constructor(private service: SnackbarService) {}

  ngOnInit(): void {
    this.subscribeToSnackbarTrigger();
  }

  ngOnDestroy(): void {
    this.subscriber !== null && this.subscriber.unsubscribe();
  }

  subscribeToSnackbarTrigger() {
    this.subscriber = this.service.trigger$
      .pipe(
        tap(() => {
          this.isSnackbarVisible = true;
        }),
        debounceTime(1000),
        tap((message: string) => {
          this.show = true;
          this.message = message;
        }),
        delay(this.duration),
        tap(() => {
          this.show = false;
        }),
        delay(500),
        tap(() => {
          this.isSnackbarVisible = false;
        }),
      )
      .subscribe(() => {
        this.message = null;
      });
  }
}

enum Direction {
  TOP,
  BOTTOM,
}
enum Kind {
  NEUTRAL,
  SUCCESS,
  WARNING,
  INFO,
}
