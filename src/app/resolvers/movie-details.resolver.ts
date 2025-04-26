import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DetailsService } from '../services/details.service';

@Injectable({
  providedIn: 'root'
})
export class movieDetailsResolver implements Resolve<any> {
  constructor(private detailsService: DetailsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const movieId = route.paramMap.get('id');
      return this.detailsService.getMovieById(movieId || '');
  }
}