import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularwebapi } from './angularwebapi';

describe('Angularwebapi', () => {
  let component: Angularwebapi;
  let fixture: ComponentFixture<Angularwebapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angularwebapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angularwebapi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
