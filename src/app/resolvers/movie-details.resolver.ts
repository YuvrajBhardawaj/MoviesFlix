import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { MovieServiceService } from '../services/movie-service.service';

@Injectable({
  providedIn: 'root'
})
export class movieDetailsResolver implements Resolve<any> {
  constructor(private movieService: MovieServiceService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const movieId = route.paramMap.get('id');
      return this.movieService.getMovieById(movieId || '');
  }
}