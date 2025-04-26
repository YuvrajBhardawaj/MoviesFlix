import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CreditsResponse, MovieDetails } from '../models/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor(private http: HttpClient) { }
  private apiKey = "2f38bf0380418876c7d496e410ddf0a7";

  private DetailsSubject = new BehaviorSubject<MovieDetails|null>(null);
  Details$ = this.DetailsSubject.asObservable();
  getMovieById(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`)
      .pipe(
        tap((res:MovieDetails)=>this.DetailsSubject.next(res))
      );
  }
  getMovieCredits(id: string) {
    return this.http.get<CreditsResponse>(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(
        tap((res: CreditsResponse)=>console.log(res))
      );
  }
  
}
