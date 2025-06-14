import { Component, Input } from '@angular/core';
import { CreditsResponse } from '../../models/details';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-cast-crew',
  imports: [MaterialModule],
  templateUrl: './cast-crew.component.html',
  styleUrl: './cast-crew.component.css'
})
export class CastCrewComponent {
  @Input() credits!: CreditsResponse;

  // Sort cast by popularity (descending)
  get sortedCast() {
    return [...this.credits.cast]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 12);
  }

  // Optionally: Sort crew by popularity too
  get sortedCrew() {
    return [...this.credits.crew]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 12);
  }
}
