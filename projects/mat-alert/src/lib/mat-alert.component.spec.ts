import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatAlertComponent } from './mat-alert.component';

describe('MatAlertComponent', () => {
  let component: MatAlertComponent;
  let fixture: ComponentFixture<MatAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
