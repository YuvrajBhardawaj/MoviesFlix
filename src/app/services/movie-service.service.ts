import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingMovies, TrendingShows } from '../models/trending';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  getTrendingMovies(): Observable<TrendingMovies>{
    return this.http.get<TrendingMovies>("https://api.themoviedb.org/3/trending/movie/week?api_key=2f38bf0380418876c7d496e410ddf0a7")
  }
  getTrendingShows(): Observable<TrendingShows>{
    return this.http.get<TrendingShows>("https://api.themoviedb.org/3/trending/tv/week?api_key=2f38bf0380418876c7d496e410ddf0a7")
  }
}
