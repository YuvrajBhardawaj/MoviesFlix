import { TestBed } from '@angular/core/testing';

import { CelebsService } from './celebs.service';

describe('CelebsService', () => {
  let service: CelebsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelebsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
