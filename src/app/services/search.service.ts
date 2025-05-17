import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { SearchResponse } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  private apiKey = '2f38bf0380418876c7d496e410ddf0a7';

  private searchResultsSubject = new BehaviorSubject<SearchResponse | null>(null);
  $searchResults = this.searchResultsSubject.asObservable();

  getSearchData(search_item: string){
    return this.http.get<SearchResponse>(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${search_item}`)
      .pipe(
        tap((res:SearchResponse)=>{
          this.searchResultsSubject.next(res);
        })
      )
  }
}
