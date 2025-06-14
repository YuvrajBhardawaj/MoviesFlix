import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { Season, ShowDetails } from '../../../models/details';
import { DetailsService } from '../../../services/details.service';

@Component({
  selector: 'app-seasons',
  imports: [MaterialModule],
  templateUrl: './seasons.component.html',
  styleUrl: './seasons.component.css',
})
export class SeasonsComponent implements OnInit {
  constructor(private detailsService: DetailsService) {}
  seasons: Season[] = [];
  ngOnInit(): void {
    this.detailsService.showDetails$.subscribe({
      next: (res: ShowDetails | null) => (this.seasons = res?.seasons || []),
    });
  }
}
