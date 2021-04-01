import { TestBed } from '@angular/core/testing';

import { InsurancequoteService } from './insurancequote.service';

describe('InsurancequoteService', () => {
  let service: InsurancequoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancequoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
