import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAlertComponent } from './mat-alert.component';

describe('MatAlertComponent', () => {
  let component: MatAlertComponent;
  let fixture: ComponentFixture<MatAlertComponent>;

  beforeEach(async(() => {
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
