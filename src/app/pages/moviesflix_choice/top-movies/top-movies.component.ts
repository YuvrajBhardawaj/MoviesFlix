import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../../components/cards/cards.component';
import { MustWatchService } from '../../../services/must-watch.service';
import { TopRatedMoviesResponse } from '../../../models/topSuggested';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-top-movies',
  imports: [CardsComponent, MaterialModule],
  templateUrl: './top-movies.component.html',
  styleUrl: './top-movies.component.css'
})
export class TopMoviesComponent implements OnInit{
  constructor(private mustWatchService: MustWatchService){}

  topRatedMovies: TopRatedMoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  currentPage: number = 1;

  previousPage(){
    if(this.currentPage>1){
      this.currentPage--;
      this.mustWatchService.getTopRatedMovies(this.currentPage).subscribe();
    }
  }

  nextPage(){
    if(this.currentPage<=this.topRatedMovies.total_pages){
      this.currentPage++;
      this.mustWatchService.getTopRatedMovies(this.currentPage).subscribe();
    }
  }

  ngOnInit(): void {
    this.mustWatchService.mustWatchMovies$.subscribe({
      next:(res: TopRatedMoviesResponse)=>{
        this.topRatedMovies = res
      }
    })
  }
}
