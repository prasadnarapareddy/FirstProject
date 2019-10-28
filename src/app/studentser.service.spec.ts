import { TestBed } from '@angular/core/testing';

import { StudentserService } from './studentser.service';

describe('StudentserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentserService = TestBed.get(StudentserService);
    expect(service).toBeTruthy();
  });
});
