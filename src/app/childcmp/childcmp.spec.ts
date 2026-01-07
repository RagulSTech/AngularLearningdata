import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcmp } from './childcmp';

describe('Childcmp', () => {
  let component: Childcmp;
  let fixture: ComponentFixture<Childcmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childcmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childcmp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
