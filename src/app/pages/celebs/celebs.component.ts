import { Component, OnInit } from '@angular/core';
import { CelebsService } from '../../services/celebs.service';
import { PopularCelebsResponse } from '../../models/celebs';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-celebs',
  imports: [MaterialModule],
  templateUrl: './celebs.component.html',
  styleUrl: './celebs.component.css'
})
export class CelebsComponent implements OnInit{
  constructor(private celebsService: CelebsService){}
  celebsList: PopularCelebsResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  };;

  currentPage: number = 1;

  previousPage(){
    if(this.currentPage>1){
      this.currentPage--;
      this.celebsService.getPopularCelebs(this.currentPage).subscribe();
    }
  }

  nextPage(){
    if(this.currentPage<=this.celebsList.total_pages){
      this.currentPage++;
      this.celebsService.getPopularCelebs(this.currentPage).subscribe();
    }
  }
  ngOnInit(): void {
    this.celebsService.popularCelebs$.subscribe({
      next:(res:PopularCelebsResponse)=>{
        this.celebsList = res
      }
    })
  }
}
