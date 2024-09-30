import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckscheduleComponent } from './checkschedule.component';

describe('CheckscheduleComponent', () => {
  let component: CheckscheduleComponent;
  let fixture: ComponentFixture<CheckscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckscheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
