import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CharactersComponent ]
    })
    .compileComponents();
  });

  afterEach(() => {
    httpMock?.verify();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
