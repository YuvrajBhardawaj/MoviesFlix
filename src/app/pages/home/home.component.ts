import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingMovies, TrendingShows } from '../../models/trending';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  trendingMovies: TrendingMovies[] = [];
  trendingShows: TrendingShows[] = [];
  ngOnInit(): void {
    const resolvedData = this.route.snapshot.data['trending'];
    this.trendingMovies = resolvedData.trendingMovies.results;
    this.trendingShows = resolvedData.trendingShows.results;
    console.log(this.trendingMovies);
    console.log(this.trendingShows);
  }
}
