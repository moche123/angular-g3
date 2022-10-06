import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PagesGuard } from './pages.guard';

describe('PagesGuard', () => {
  let guard: PagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(PagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
