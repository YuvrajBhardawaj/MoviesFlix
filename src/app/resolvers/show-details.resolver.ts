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
export class showDetailsResolver implements Resolve<any> {
  constructor(private detailsService: DetailsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const showId = route.paramMap.get('id');
    return forkJoin({
      showDetails: this.detailsService.getShowById(showId || ''),
      // showCastDetials: this.detailsService.getshowCredits(showId || '')
    });
  }
}
