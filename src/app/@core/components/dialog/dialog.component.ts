import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.scss' ],
})
export class DialogComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() hasBackdrop: boolean = true;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  shouldShow: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggleDialog(show: boolean) {
    this.close.emit();
  }
}
