import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testngmodules } from './testngmodules';

describe('Testngmodules', () => {
  let component: Testngmodules;
  let fixture: ComponentFixture<Testngmodules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testngmodules]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testngmodules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
