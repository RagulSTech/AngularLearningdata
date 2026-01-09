import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculatorservices } from './calculatorservices';

describe('Calculatorservices', () => {
  let component: Calculatorservices;
  let fixture: ComponentFixture<Calculatorservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculatorservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculatorservices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
