import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute){}
  details = []
  ngOnInit(): void {
      this.details = this.route.snapshot.data['details'];
      console.log(this.details);
  }
}
