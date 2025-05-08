import { Component, OnInit } from '@angular/core';
import { CreditsResponse, ShowDetails } from '../../models/details';
import { DetailsService } from '../../services/details.service';
import { MaterialModule } from '../../material/material.module';
import { CastCrewComponent } from '../cast-crew/cast-crew.component';

@Component({
  selector: 'app-show-details',
  imports: [MaterialModule, CastCrewComponent],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css',
})
export class ShowDetailsComponent implements OnInit{
  constructor(private detailsService: DetailsService) {}
  details: ShowDetails | null = null;
  showCredits: CreditsResponse | null = null;
  Math = Math;
  ngOnInit(): void {
    this.detailsService.showDetails$.subscribe({
      next: (res: ShowDetails | null) => (this.details = res),
    });
    this.detailsService.Credits$.subscribe({
      next:(res: CreditsResponse|null) => this.showCredits=res
    })
  }
}
