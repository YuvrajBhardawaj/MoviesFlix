import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MustWatchService {

  constructor(private http: HttpClient) { }

  getTopRatedMovies(){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${environment.apiKey}`)
  }
}
