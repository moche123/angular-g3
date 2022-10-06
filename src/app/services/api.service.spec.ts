import { TestBed,getTestBed  } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    //let injector = getTestBed();
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });


  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
