import { TestBed } from '@angular/core/testing';

import { Testexternal } from './testexternal';

describe('Testexternal', () => {
  let service: Testexternal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Testexternal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
