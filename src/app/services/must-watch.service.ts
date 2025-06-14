import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  TopRatedMoviesResponse,
  TopRatedShowsResponse,
} from '../models/topSuggested';

@Injectable({
  providedIn: 'root',
})
export class MustWatchService {
  constructor(private http: HttpClient) {}

  private mustWatchMoviesSubject = new BehaviorSubject<TopRatedMoviesResponse>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  private mustWatchShowsSubject = new BehaviorSubject<TopRatedShowsResponse>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  mustWatchMovies$ = this.mustWatchMoviesSubject.asObservable();
  mustWatchShows$ = this.mustWatchShowsSubject.asObservable();

  getTopRatedMovies(page: number = 1): Observable<TopRatedMoviesResponse> {
    return this.http.get<TopRatedMoviesResponse>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.apiKey}&page=${page}`)
      .pipe(
        tap((res: TopRatedMoviesResponse) => {
          this.mustWatchMoviesSubject.next(res);
        })
      );
  }

  getTopRatedShows(page: number = 1): Observable<TopRatedShowsResponse> {
    return this.http
      .get<TopRatedShowsResponse>(`https://api.themoviedb.org/3/tv/top_rated?api_key=${environment.apiKey}&page=${page}`)
      .pipe(
        tap((res: TopRatedShowsResponse) => {
          this.mustWatchShowsSubject.next(res);
        })
      );
  }
}
