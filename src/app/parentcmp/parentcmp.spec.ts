import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentcmp } from './parentcmp';

describe('Parentcmp', () => {
  let component: Parentcmp;
  let fixture: ComponentFixture<Parentcmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentcmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentcmp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
