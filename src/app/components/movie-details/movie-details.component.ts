import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../models/details';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  constructor(private detailsService : DetailsService){}
  details: MovieDetails|null = null;
  ngOnInit(): void {
      this.detailsService.Details$.subscribe({
        next:(res: MovieDetails|null)=>this.details = res
      })
  }
}
