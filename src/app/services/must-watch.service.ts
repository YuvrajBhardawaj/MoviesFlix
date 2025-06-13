import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopRatedMoviesResponse } from '../models/topSuggested';

@Injectable({
  providedIn: 'root'
})
export class MustWatchService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(): Observable<TopRatedMoviesResponse>{
    return this.http.get<TopRatedMoviesResponse>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.apiKey}`)
  }
}
