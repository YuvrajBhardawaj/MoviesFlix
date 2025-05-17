import { Component } from '@angular/core';
import { TrendingShowsPagination } from '../../../models/trending';
import { TrendingService } from '../../../services/trending.service';
import { CardsComponent } from '../../../components/cards/cards.component';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-trending-shows',
  imports: [CardsComponent, MaterialModule],
  templateUrl: './trending-shows.component.html',
  styleUrl: './trending-shows.component.css'
})
export class TrendingShowsComponent {
  constructor(private trendingService: TrendingService) {}
    trendingShows : TrendingShowsPagination = {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0
    };
  
    currentPage: number = 1;
  
    previousPage(){
      if(this.currentPage>1){
        this.currentPage--;
        this.trendingService.getTrendingShows(this.currentPage).subscribe();
      }
    }
  
    nextPage(){
      if(this.currentPage<=this.trendingShows.total_pages){
        this.currentPage++;
        this.trendingService.getTrendingShows(this.currentPage).subscribe();
      }
    }
  
    ngOnInit(): void {
      this.trendingService.trendingShows$.subscribe({
        next: (data: TrendingShowsPagination) =>
          (this.trendingShows = data),
      });
    }
}
