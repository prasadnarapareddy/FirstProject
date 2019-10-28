import { TestBed } from '@angular/core/testing';

import { ListstujsonService } from './liststujson.service';

describe('ListstujsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListstujsonService = TestBed.get(ListstujsonService);
    expect(service).toBeTruthy();
  });
});
