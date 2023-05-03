import { TestBed } from '@angular/core/testing';

import { ReclamationService } from './reclamation.service';

describe('ReclamationService', () => {
  let service: ReclamationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationService);
  });

  it('should be created', () => {
    //const service : ReclamationService = TestBed.get(ReclamationService);
    expect(service).toBeTruthy();
  });
});
