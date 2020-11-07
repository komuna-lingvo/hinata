import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-button',
  templateUrl: './step-button.component.html',
  styleUrls: [ './step-button.component.scss' ],
})
export class StepButtonComponent implements OnInit {
  @Input() isActive: boolean;
  @Input() isDisabled: boolean = true;
  @Input() indicator: number;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
