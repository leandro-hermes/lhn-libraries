import { TestBed } from '@angular/core/testing';

import { MatAlertService } from './mat-alert.service';

describe('MatAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatAlertService = TestBed.get(MatAlertService);
    expect(service).toBeTruthy();
  });
});
