import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CelebsService } from '../services/celebs.service';
import { PopularCelebsResponse } from '../models/celebs';

@Injectable({
  providedIn: 'root'
})
export class celebsResolver implements Resolve<PopularCelebsResponse> {
  constructor(private celebsService: CelebsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.celebsService.getPopularCelebs();
  }
}