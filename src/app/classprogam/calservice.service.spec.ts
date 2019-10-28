import { TestBed } from '@angular/core/testing';

import { CalserviceService } from './calservice.service';

describe('CalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalserviceService = TestBed.get(CalserviceService);
    expect(service).toBeTruthy();
  });
});
