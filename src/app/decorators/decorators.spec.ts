import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Decorators } from './decorators';

describe('Decorators', () => {
  let component: Decorators;
  let fixture: ComponentFixture<Decorators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Decorators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Decorators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
