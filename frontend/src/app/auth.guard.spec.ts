import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('Auth1Guard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
