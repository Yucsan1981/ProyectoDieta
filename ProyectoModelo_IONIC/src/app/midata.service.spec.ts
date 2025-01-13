import { TestBed } from '@angular/core/testing';

import { MidataService } from './midata.service';

describe('MidataService', () => {
  let service: MidataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
