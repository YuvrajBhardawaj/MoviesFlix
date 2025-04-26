import { Component, OnInit } from '@angular/core';
import { TrendingMovies, TrendingMoviesPageination, TrendingShows, TrendingShowsPagination } from '../../models/trending';
import { CardsComponent } from '../../components/cards/cards.component';
import { MaterialModule } from '../../material/material.module';
import { TrendingService } from '../../services/trending.service';

@Component({
  selector: 'app-home',
  imports: [CardsComponent, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
  constructor(private movieService: TrendingService) {}
  trendingMovies: TrendingMovies[] = [];
  trendingShows: TrendingShows[] = [];
  ngOnInit(): void {
    this.movieService.trendingMovies$.subscribe({
      next:(data: TrendingMoviesPageination)=>this.trendingMovies = data.results
    })
    this.movieService.trendingShows$.subscribe({
      next:(data: TrendingShowsPagination)=>this.trendingShows = data.results
    })
  }
}
