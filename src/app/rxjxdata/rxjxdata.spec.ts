import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rxjxdata } from './rxjxdata';

describe('Rxjxdata', () => {
  let component: Rxjxdata;
  let fixture: ComponentFixture<Rxjxdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rxjxdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rxjxdata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
