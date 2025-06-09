import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { SearchService } from '../services/search.service';


@Injectable({
  providedIn: 'root',
})
export class searchResolver implements Resolve<any>{
  constructor(private searchService: SearchService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const query = route.queryParamMap.get('query');
  }
}