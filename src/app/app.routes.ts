import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeResolver } from './resolvers/home.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { movieDetailsResolver } from './resolvers/movie-details.resolver';
import { showDetailsResolver } from './resolvers/show-details.resolver';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { searchResolver } from './resolvers/search.resolver';
import { TrendingComponent } from './pages/trending/trending.component';
import { TrendingResolver } from './resolvers/trending.resolver';
import { TrendingMoviesComponent } from './pages/trending/trending-movies/trending-movies.component';
import { TrendingShowsComponent } from './pages/trending/trending-shows/trending-shows.component';
import { SearchMoviesComponent } from './pages/search-results/search-movies/search-movies.component';
import { SearchShowsComponent } from './pages/search-results/search-shows/search-shows.component';
import { SearchActorsComponent } from './pages/search-results/search-actors/search-actors.component';

export const routes: Routes = [
  {
    path: 'search',
    children: [
      {
        path: 'movies',
        component: SearchMoviesComponent,
        resolve: {
          details: searchResolver,
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
      },
      {
        path: 'shows',
        component: SearchShowsComponent
      },
      {
        path: 'actors',
        component: SearchActorsComponent
      }
    ],
    component: SearchResultsComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: {
      details: movieDetailsResolver,
    },
  },
  {
    path: 'show/:id',
    component: ShowDetailsComponent,
    resolve: {
      details: showDetailsResolver,
    },
  },
  {
    path: 'trending',
    children: [
      {
        path: 'movies',
        component: TrendingMoviesComponent,
        resolve: {
          trending: TrendingResolver,
        },
      },
      {
        path: 'shows',
        component: TrendingShowsComponent,
        resolve: {
          trending: TrendingResolver,
        },
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
    resolve: {
      trending: HomeResolver,
    },
  },
];
