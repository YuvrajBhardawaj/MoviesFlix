import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { TrendingService } from '../services/trending.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {
  constructor(private trendingService: TrendingService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return forkJoin({
      trendingMovies: this.trendingService.getTrendingMovies(),
      trendingShows: this.trendingService.getTrendingShows()
    });
  }
}
