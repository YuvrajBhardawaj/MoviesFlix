import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MustWatchService } from '../services/must-watch.service';
import { TopRatedMoviesResponse } from '../models/topSuggested';


@Injectable({
  providedIn: 'root'
})
export class TopMoviesResolver implements Resolve<TopRatedMoviesResponse> {
  constructor(private mustWatchService: MustWatchService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TopRatedMoviesResponse> {
    return this.mustWatchService.getTopRatedMovies();
  }
}
