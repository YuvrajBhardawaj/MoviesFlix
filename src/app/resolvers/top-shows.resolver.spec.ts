import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { topShowsResolver } from './top-shows.resolver';

describe('topShowsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => topShowsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
