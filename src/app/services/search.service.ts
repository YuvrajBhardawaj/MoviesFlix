import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  private apiKey = '2f38bf0380418876c7d496e410ddf0a7';
  getSearchData(search_item: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${search_item}`);
  }
}
