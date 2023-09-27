import { TestBed } from '@angular/core/testing';
import { CanActivate } from '@angular/router'; 

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: CanActivate; 

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
