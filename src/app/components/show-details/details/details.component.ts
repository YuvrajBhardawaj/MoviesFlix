import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../../services/details.service';
import { CreditsResponse, ShowDetails } from '../../../models/details';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CastCrewComponent } from '../../cast-crew/cast-crew.component';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-details',
  imports: [MaterialModule, CastCrewComponent, RouterOutlet, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(private detailsService: DetailsService) {}
  details: ShowDetails | null = null;
  showCredits: CreditsResponse | null = null;
  Math = Math;
  ngOnInit(): void {
    this.detailsService.showDetails$.subscribe({
      next: (res: ShowDetails | null) => this.details = res,
    });
    this.detailsService.Credits$.subscribe({
      next:(res: CreditsResponse|null) => this.showCredits=res
    })
  }
}
