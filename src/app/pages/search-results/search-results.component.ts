import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { MaterialModule } from '../../material/material.module';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search-results',
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{
  constructor(private searchService: SearchService, private router: Router){}
  searchResults: any | null = null;
  moviesCount: number = 0;
  showsCount: number = 0;
  actorsCount: number = 0;
  curr: string = 'movies';

  onCategoryChange(category: string) {
    this.curr = category;
    this.router.navigate([`/search/${this.curr}`]);
  }

  if(searchResults: { results: any; }){
    for(const ele in searchResults.results){
    }
  }
  ngOnInit(): void {
    // this.searchService.searchResults$.subscribe({
    //   next:(res:any | null)=>this.searchResults = res
    // })
    console.log(this.searchResults)
  }
}
