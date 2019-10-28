import { TestBed } from '@angular/core/testing';

import { StudentjsonService } from './studentjson.service';

describe('StudentjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentjsonService = TestBed.get(StudentjsonService);
    expect(service).toBeTruthy();
  });
});
