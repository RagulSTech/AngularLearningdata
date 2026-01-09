import { TestBed } from '@angular/core/testing';

import { SericesCalc } from './serices-calc';

describe('SericesCalc', () => {
  let service: SericesCalc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SericesCalc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
