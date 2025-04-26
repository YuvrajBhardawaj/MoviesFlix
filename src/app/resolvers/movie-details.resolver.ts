import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DetailsService } from '../services/details.service';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class movieDetailsResolver implements Resolve<any> {
  constructor(private detailsService: DetailsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movieId = route.paramMap.get('id');
    return forkJoin({
      movieDetails: this.detailsService.getMovieById(movieId || ''),
      movieCastDetials: this.detailsService.getMovieCredits(movieId || '')
    });
  }
}
