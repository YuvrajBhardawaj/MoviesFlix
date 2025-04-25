import { Component, Input, input } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { TrendingMovies, TrendingShows } from '../../../models/trending';

@Component({
  selector: 'app-cards',
  imports: [MaterialModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() data!: TrendingMovies|TrendingShows;
  @Input() title!: string;
  Math = Math; // 👈 Expose Math to the template
}
