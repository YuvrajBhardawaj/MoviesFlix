import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { trendingResolver } from './trending.resolver';

describe('trendingResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => trendingResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
