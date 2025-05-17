import { Component } from '@angular/core';
import { TrendingService } from '../../services/trending.service';
import { TrendingMovies, TrendingMoviesPageination, TrendingShows, TrendingShowsPagination } from '../../models/trending';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-trending',
  imports: [CardsComponent, MaterialModule, RouterLink],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent {
  constructor(private trendingService: TrendingService) {}
  trendingMovies: TrendingMovies[] = [];
  trendingShows: TrendingShows[] = [];

  ngOnInit(): void {
    this.trendingService.trendingMovies$.subscribe({
      next: (data: TrendingMoviesPageination) =>
        (this.trendingMovies = data.results),
    });
    this.trendingService.trendingShows$.subscribe({
      next: (data: TrendingShowsPagination) =>
        (this.trendingShows = data.results),
    });
  }
}
