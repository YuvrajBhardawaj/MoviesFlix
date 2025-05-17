import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { RouterOutlet } from '@angular/router';
import { TrendingMoviesPageination, TrendingShows } from '../../../models/trending';
import { TrendingService } from '../../../services/trending.service';
import { CardsComponent } from "../../../components/cards/cards.component";


@Component({
  selector: 'app-trending-movies',
  imports: [MaterialModule, CardsComponent],
  templateUrl: './trending-movies.component.html',
  styleUrl: './trending-movies.component.css'
})
export class TrendingMoviesComponent implements OnInit{
  constructor(private trendingService: TrendingService) {}
  trendingMovies : TrendingMoviesPageination = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  };

  currentPage: number = 1;

  previousPage(){
    if(this.currentPage>1){
      this.currentPage--;
      this.trendingService.getTrendingMovies(this.currentPage).subscribe();
    }
  }

  nextPage(){
    if(this.currentPage<=this.trendingMovies.total_pages){
      this.currentPage++;
      this.trendingService.getTrendingMovies(this.currentPage).subscribe();
    }
  }

  ngOnInit(): void {
    this.trendingService.trendingMovies$.subscribe({
      next: (data: TrendingMoviesPageination) =>
        (this.trendingMovies = data),
    });
  }
}

