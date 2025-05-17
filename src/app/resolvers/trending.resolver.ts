import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TrendingService } from '../services/trending.service';
import { TrendingMoviesPageination, TrendingShowsPagination } from '../models/trending';

@Injectable({
  providedIn: 'root'
})
export class TrendingResolver implements Resolve<TrendingMoviesPageination | TrendingShowsPagination> {
  constructor(private trendingService: TrendingService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TrendingMoviesPageination | TrendingShowsPagination> {
    const type = route.paramMap.get('type');
    if (type === 'movies') {
      return this.trendingService.getTrendingMovies();
    } else {
      return this.trendingService.getTrendingShows();
    }
  }
}
