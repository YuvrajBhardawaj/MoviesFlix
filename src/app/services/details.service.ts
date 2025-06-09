import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CreditsResponse, MovieDetails, ShowDetails } from '../models/details';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  private movieDetailsSubject = new BehaviorSubject<MovieDetails | null>(null);
  movieDetails$ = this.movieDetailsSubject.asObservable();

  private CreditSubject = new BehaviorSubject<CreditsResponse | null>(null);
  Credits$ = this.CreditSubject.asObservable();

  private showmovieDetailsSubject = new BehaviorSubject<ShowDetails | null>(null);
  showDetails$ = this.showmovieDetailsSubject.asObservable();

  getMovieById(id: string): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.apiKey}`
      )
      .pipe(tap((res: MovieDetails) => this.movieDetailsSubject.next(res)));
  }

  getMovieCredits(id: string): Observable<CreditsResponse> {
    return this.http
      .get<CreditsResponse>(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${environment.apiKey}`
      )
      .pipe(tap((res: CreditsResponse) => this.CreditSubject.next(res)));
  }

  getShowById(id: string): Observable<ShowDetails> {
    return this.http
      .get<ShowDetails>(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${environment.apiKey}`
      )
      .pipe(tap((res: ShowDetails) => this.showmovieDetailsSubject.next(res)));
  }

  getShowCredits(id: string): Observable<CreditsResponse> {
    return this.http
      .get<CreditsResponse>(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${environment.apiKey}`
      )
      .pipe(tap((res: CreditsResponse) => this.CreditSubject.next(res)));
  }
}
