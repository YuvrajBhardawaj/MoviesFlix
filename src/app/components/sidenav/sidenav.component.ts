import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { catchError, debounceTime, of, switchMap } from 'rxjs';
import { SearchResponse } from '../../models/search';

@Component({
  selector: 'app-sidenav',
  imports: [MaterialModule, RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnDestroy, OnInit {
  protected readonly isMobile = signal(true);
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  @ViewChild('searchContainer') searchContainer!: ElementRef;
  dropDown: boolean = false;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (
      this.searchContainer &&
      !this.searchContainer.nativeElement.contains(event.target)
    ) {
      this.dropDown = false;
    }
  }

  @ViewChild('searchInput') searchInput!: ElementRef;
  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent): void {
    this.dropDown = false;
    if (this.searchInput) {
      this.searchInput.nativeElement.blur();
    }
  }

  searchResults: {
    title?: string;
    name?: string;
    poster_path: string;
    popularity: number;
    media_type: string;
  }[] = [];
  constructor(
    private router: Router,
    media: MediaMatcher,
    private searchService: SearchService
  ) {
    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  // Search form
  searchField = new FormControl<string>('', { nonNullable: true });

  submit(): void {
    const query = this.searchField.getRawValue().trim();
    if (!query) return;
    this.searchField.reset();
    this.router.navigate(['/search/movies'], { queryParams: { query } });
  }

  onFocus() {
    console.log('Hi');
  }

  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((queryObj) => {
          const query = queryObj?.trim();
          if (!query) {
            return of({
              page: 1,
              results: [],
              total_pages: 0,
              total_results: 0,
            } as SearchResponse);
          }
          return this.searchService.getSearchData(query).pipe(
            catchError((err) => {
              console.error(err);
              return of({
                page: 1,
                results: [],
                total_pages: 0,
                total_results: 0,
              } as SearchResponse);
            })
          );
        })
      )
      .subscribe((val: SearchResponse) => {
        this.searchResults = val.results.sort(
          (a, b) => b.popularity - a.popularity
        );
      });
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
