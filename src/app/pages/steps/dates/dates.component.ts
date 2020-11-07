import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: [ './dates.component.scss' ],
})
export class DatesComponent implements OnInit {
  workingHours: Date[] = [];
  private workingHoursSteps = 45;

  constructor() {}

  ngOnInit(): void {
    this.buildAvailableSchedules();
  }

  get workingHoursFrom() {
    const date = new Date();
    date.setHours(8);
    date.setMinutes(0);
    return date;
  }

  get workingHoursTo() {
    const date = new Date();
    date.setHours(18);
    date.setMinutes(0);
    return date;
  }

  private buildAvailableSchedules() {
    let start = 0;

    while (this.workingHoursTo.getTime() >= start) {
      const date = this.workingHoursFrom;
      date.setMinutes(date.getMinutes() + this.workingHoursSteps);
      start = date.getTime();
      this.workingHours.push(date);
    }
  }
}
