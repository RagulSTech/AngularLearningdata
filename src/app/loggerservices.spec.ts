import { TestBed } from '@angular/core/testing';

import { Loggerservices } from './loggerservices';

describe('Loggerservices', () => {
  let service: Loggerservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loggerservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
