import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditsResponse, MovieDetails } from '../../models/details';
import { DetailsService } from '../../services/details.service';
import { DatePipe } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { CastCrewComponent } from '../cast-crew/cast-crew.component';

@Component({
  selector: 'app-movie-details',
  imports: [DatePipe, MaterialModule, CastCrewComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  constructor(private detailsService : DetailsService){}
  details: MovieDetails|null = null;
  movieCredits: CreditsResponse|null = null;
  Math = Math;
  ngOnInit(): void {
      this.detailsService.movieDetails$.subscribe({
        next:(res: MovieDetails|null)=>this.details = res
      })

      this.detailsService.Credits$.subscribe({
        next:(res: CreditsResponse|null)=>this.movieCredits = res
      })
  }
}
