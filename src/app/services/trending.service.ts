import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TrendingMovies, TrendingMoviesPageination, TrendingShows, TrendingShowsPagination } from '../models/trending';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  constructor(private http: HttpClient) {}

  private apiKey = "2f38bf0380418876c7d496e410ddf0a7";

  private trendingMoviesSubject = new BehaviorSubject<TrendingMoviesPageination>({
    page: 1,              // Set a default page number
    results: [],          // Start with an empty array for results
    total_pages: 0,       // Default to 0 pages
    total_results: 0,     // Default to 0 total results
  });
  trendingMovies$ = this.trendingMoviesSubject.asObservable();

  private trendingShowsSubject = new BehaviorSubject<TrendingShowsPagination>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  });
  trendingShows$ = this.trendingShowsSubject.asObservable();

  getTrendingMovies(page: number=1): Observable<TrendingMoviesPageination> {
    return this.http.get<TrendingMoviesPageination>(`https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}&page=${page}`)
    .pipe(
      tap((res: TrendingMoviesPageination) => {
        this.trendingMoviesSubject.next(res); // Update the BehaviorSubject with the new data
      })
    );
  }
  
  getTrendingShows(page: number=1): Observable<TrendingShowsPagination> {
    return this.http.get<TrendingShowsPagination>(`https://api.themoviedb.org/3/trending/tv/week?api_key=${this.apiKey}&page=${page}`)
      .pipe(
        tap((res: TrendingShowsPagination)=>{
          this.trendingShowsSubject.next(res);
        })
      );
  }

}
