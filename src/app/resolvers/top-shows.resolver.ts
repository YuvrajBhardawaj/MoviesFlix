import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MustWatchService } from '../services/must-watch.service';
import { TopRatedShowsResponse } from '../models/topSuggested';

@Injectable({
  providedIn: 'root'
})
export class TopShowsResolver implements Resolve<TopRatedShowsResponse> {
  constructor(private mustWatchService: MustWatchService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TopRatedShowsResponse> {
    return this.mustWatchService.getTopRatedShows();
  }
}