import { TestBed } from '@angular/core/testing';

import { MatAlert } from './mat-alert.service';

describe('MatAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MatAlert,
    ],
  }));

  it('should be created', () => {
    const service: MatAlert = TestBed.get(MatAlert);
    expect(service).toBeTruthy();
  });
});
