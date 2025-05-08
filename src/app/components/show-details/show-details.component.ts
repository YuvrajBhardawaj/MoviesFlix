import { Component, OnInit } from '@angular/core';
import { ShowDetails } from '../../models/details';
import { DetailsService } from '../../services/details.service';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-show-details',
  imports: [MaterialModule],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css',
})
export class ShowDetailsComponent implements OnInit{
  constructor(private detailsService: DetailsService) {}
  details: ShowDetails | null = null;
  Math = Math;
  ngOnInit(): void {
    this.detailsService.showDetails$.subscribe({
      next: (res: ShowDetails | null) => (this.details = res),
    });
  }
}
