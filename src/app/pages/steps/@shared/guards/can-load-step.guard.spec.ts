import { TestBed } from '@angular/core/testing';

import { CanLoadStepGuard } from './can-load-step.guard';

describe('CanLoadStepGuard', () => {
  let guard: CanLoadStepGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadStepGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
