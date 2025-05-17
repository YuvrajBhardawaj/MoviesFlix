import { Component, inject, OnDestroy, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-sidenav',
  imports: [MaterialModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnDestroy {
  protected readonly isMobile = signal(true);
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    media: MediaMatcher,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  // Search form
  searchField = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
  });

  submit(): void {
    const query = this.searchField.getRawValue().name.trim();
    if (!query) return;
    this.searchField.reset();
    this.router.navigate(['/search'], { queryParams: { query } });
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
