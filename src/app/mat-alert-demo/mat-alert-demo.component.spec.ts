import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAlertDemoComponent } from './mat-alert-demo.component';

describe('MatAlertDemoComponent', () => {
  let component: MatAlertDemoComponent;
  let fixture: ComponentFixture<MatAlertDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAlertDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAlertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
