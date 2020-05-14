import { TestBed } from '@angular/core/testing';

import { MatAlert } from './mat-alert.service';

describe('MatAlertService', () => {
  let service: MatAlert;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MatAlert,
      ],
    });
    service = TestBed.inject(MatAlert);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
