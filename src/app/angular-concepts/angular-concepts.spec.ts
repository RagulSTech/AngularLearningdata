import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConcepts } from './angular-concepts';

describe('AngularConcepts', () => {
  let component: AngularConcepts;
  let fixture: ComponentFixture<AngularConcepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularConcepts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularConcepts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
