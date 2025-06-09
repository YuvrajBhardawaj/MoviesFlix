import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { celebsResolver } from './celebs.resolver';

describe('celebsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => celebsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
