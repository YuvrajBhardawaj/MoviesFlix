import { TestBed } from '@angular/core/testing';

import { MustWatchService } from './must-watch.service';

describe('MustWatchService', () => {
  let service: MustWatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MustWatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
