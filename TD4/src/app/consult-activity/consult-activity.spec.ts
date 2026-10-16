import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultActivity } from './consult-activity';

describe('ConsultActivity', () => {
  let component: ConsultActivity;
  let fixture: ComponentFixture<ConsultActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultActivity],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultActivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
