import { Component, Input, input } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { TrendingMovies } from '../../../models/trending';

@Component({
  selector: 'app-cards',
  imports: [MaterialModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() data!: TrendingMovies;

}
