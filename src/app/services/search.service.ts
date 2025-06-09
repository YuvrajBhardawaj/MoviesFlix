import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, tap } from 'rxjs';
import { SearchResponse } from '../models/search';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  private searchResultsSubject = new BehaviorSubject<any | null>(null);
  searchResults$ = this.searchResultsSubject.asObservable();

  getSearchData(search_item: string){
    return this.http.get<SearchResponse>(`https://api.themoviedb.org/3/search/multi?api_key=${environment.apiKey}&query=${search_item}`)
      .pipe(
        tap((res: SearchResponse)=>{
          this.searchResultsSubject.next(res);
        })
      )
  }
}
