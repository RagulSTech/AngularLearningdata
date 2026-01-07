import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngmodulesusage } from './ngmodulesusage';

describe('Ngmodulesusage', () => {
  let component: Ngmodulesusage;
  let fixture: ComponentFixture<Ngmodulesusage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngmodulesusage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngmodulesusage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
