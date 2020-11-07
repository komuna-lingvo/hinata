import { AfterViewInit, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarService } from './@core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements AfterViewInit {
  private offlineSubject = new Subject();
  private offline$ = this.offlineSubject.asObservable();

  constructor(private snackbar: SnackbarService) {}

  ngAfterViewInit(): void {
    this.fromEventOffline();

    if (!navigator.onLine) {
      this.offlineSubject.next();
    }
  }

  private fromEventOffline() {
    this.offline$.subscribe(() => {
      this.snackbar.showSnackbar('Offline');
    });
  }
}
