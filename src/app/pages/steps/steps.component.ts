import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StepsService } from './@shared/services/steps.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: [ './steps.component.scss' ],
})
export class StepsComponent implements OnInit {
  steps: { title: string; route: string }[];
  activeStepIndex$: Observable<number>;

  constructor(private router: Router, private route: ActivatedRoute, private service: StepsService) {}

  ngOnInit(): void {
    this.steps = this.service.appointmentSteps;
    this.activeStepIndex$ = this.service.activeStepIndex$.pipe(tap((index) => this.onStepButtonClick(index - 1)));
  }

  onStepButtonClick(index: number) {
    this.router.navigate([ this.steps[index].route ], { relativeTo: this.route });
  }
}
