import { Component } from '@angular/core';
import { TopRatedShowsResponse } from '../../../models/topSuggested';
import { MustWatchService } from '../../../services/must-watch.service';
import { CardsComponent } from '../../../components/cards/cards.component';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-top-shows',
  imports: [CardsComponent, MaterialModule],
  templateUrl: './top-shows.component.html',
  styleUrl: './top-shows.component.css'
})
export class TopShowsComponent {
  constructor(private mustWatchService: MustWatchService){}
  
    topRatedShows: TopRatedShowsResponse = {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0
    };
  
    currentPage: number = 1;
  
    previousPage(){
      if(this.currentPage>1){
        this.currentPage--;
        this.mustWatchService.getTopRatedShows(this.currentPage).subscribe();
      }
    }
  
    nextPage(){
      if(this.currentPage<=this.topRatedShows.total_pages){
        this.currentPage++;
        this.mustWatchService.getTopRatedShows(this.currentPage).subscribe();
      }
    }
  
    ngOnInit(): void {
      this.mustWatchService.mustWatchShows$.subscribe({
        next:(res: TopRatedShowsResponse)=>{
          this.topRatedShows = res
        }
      })
    }
}
