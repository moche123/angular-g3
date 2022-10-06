import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // canLoad(): Observable<boolean> |  boolean  {
  //   return true;
  // }
  it('should test canLoad', () => {
    let canLoadResult:boolean | Observable<boolean> = guard.canLoad()
    expect(canLoadResult).toBe(true);
  });
});
