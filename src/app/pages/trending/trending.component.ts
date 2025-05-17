import { Component } from '@angular/core';
import { TrendingService } from '../../services/trending.service';
import { TrendingMovies, TrendingMoviesPageination, TrendingShows, TrendingShowsPagination } from '../../models/trending';
import { MaterialModule } from '../../material/material.module';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent {
  
}
