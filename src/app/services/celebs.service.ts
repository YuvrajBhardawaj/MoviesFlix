import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { PopularCelebsResponse } from '../models/celebs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CelebsService {
  constructor(private http: HttpClient) { }
  private popularCelebsSubject = new BehaviorSubject<PopularCelebsResponse>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  });
  popularCelebs$ = this.popularCelebsSubject.asObservable();

  getPopularCelebs(page: number=1){
    return this.http.get<PopularCelebsResponse>(`https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}&page=${page}`)
      .pipe(
        tap((res: PopularCelebsResponse)=>this.popularCelebsSubject.next(res))
      );
  }
}
