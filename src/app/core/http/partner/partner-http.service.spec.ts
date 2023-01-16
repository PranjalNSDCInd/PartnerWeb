import { TestBed } from '@angular/core/testing';

import { PartnerHttpService } from './partner-http.service';

describe('PartnerHttpService', () => {
  let service: PartnerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
