import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeResolver } from './resolvers/home.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { movieDetailsResolver } from './resolvers/movie-details.resolver';
import { showDetailsResolver } from './resolvers/show-details.resolver';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { searchResolver } from './resolvers/search.resolver';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchResultsComponent,
    resolve: {
      details: searchResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent, 
    resolve: {
      details: movieDetailsResolver
    }
  },
  {
    path: 'show/:id',
    component: ShowDetailsComponent, 
    resolve: {
      details: showDetailsResolver
    }
  },
  {
    path: '',
    component: HomeComponent,
    resolve: {
      trending: HomeResolver,
    },
  },
];
