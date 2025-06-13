import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { topMoviesResolver } from './top-movies.resolver';

describe('topMoviesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => topMoviesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
