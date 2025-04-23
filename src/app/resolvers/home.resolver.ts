import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { MovieServiceService } from '../services/movie-service.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {
  constructor(private movieService: MovieServiceService) {}

  resolve(): Observable<any> {
    return forkJoin({
      trendingMovies: this.movieService.getTrendingMovies(),
      trendingShows: this.movieService.getTrendingShows()
    });
  }
}
