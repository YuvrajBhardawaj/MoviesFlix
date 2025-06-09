import { Component, OnInit } from '@angular/core';
import { TrendingMovies, TrendingMoviesPageination, TrendingShows, TrendingShowsPagination } from '../../models/trending';
import { CardsComponent } from '../../components/cards/cards.component';
import { MaterialModule } from '../../material/material.module';
import { TrendingService } from '../../services/trending.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CardsComponent, MaterialModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
  constructor(private trendingService: TrendingService) {}
  trendingMovies: TrendingMovies[] = [];
  trendingShows: TrendingShows[] = [];

  ngOnInit(): void { //effect 
    this.trendingService.trendingMovies$.subscribe({
      next:(data: TrendingMoviesPageination)=>this.trendingMovies = data.results
    })
    this.trendingService.trendingShows$.subscribe({
      next:(data: TrendingShowsPagination)=>this.trendingShows = data.results
    })
    
  }
}
