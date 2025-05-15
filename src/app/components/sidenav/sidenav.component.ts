import { Component, inject, OnDestroy, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-sidenav',
  imports: [MaterialModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnDestroy {
  protected readonly fillerNav = Array.from(
    { length: 50 },
    (_, i) => `Nav Item ${i + 1}`
  );

  protected readonly isMobile = signal(true);
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor(private searchService: SearchService) {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  //search form
  searchField = new FormGroup({
    name: new FormControl<string>('',{
      nonNullable: true
    })
  })

  submit(){
    this.searchService.getSearchData(this.searchField.getRawValue().name).subscribe({
      next:(val:any)=>console.log(val)
    })
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  protected readonly shouldRun =
    /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
