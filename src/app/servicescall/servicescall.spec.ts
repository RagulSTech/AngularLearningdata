import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicescall } from './servicescall';

describe('Servicescall', () => {
  let component: Servicescall;
  let fixture: ComponentFixture<Servicescall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicescall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicescall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
