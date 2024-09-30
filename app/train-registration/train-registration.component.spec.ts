import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainRegistrationComponent } from './train-registration.component';

describe('TrainRegistrationComponent', () => {
  let component: TrainRegistrationComponent;
  let fixture: ComponentFixture<TrainRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
