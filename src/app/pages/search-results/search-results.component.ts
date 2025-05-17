import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchResponse } from '../../models/search';

@Component({
  selector: 'app-search-results',
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{
  constructor(private searchService: SearchService){}
  searchResults: SearchResponse | null = null;
  ngOnInit(): void {
    this.searchService.$searchResults.subscribe({
      next:(res:SearchResponse | null)=>this.searchResults = res
    })
  }
}
