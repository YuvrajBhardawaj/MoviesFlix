import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeResolver } from './resolvers/home.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { movieDetailsResolver } from './resolvers/movie-details.resolver';
import { showDetailsResolver } from './resolvers/show-details.resolver';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { TrendingResolver } from './resolvers/trending.resolver';
import { TrendingMoviesComponent } from './pages/trending/trending-movies/trending-movies.component';
import { TrendingShowsComponent } from './pages/trending/trending-shows/trending-shows.component';
import { CelebsComponent } from './pages/celebs/celebs.component';
import { celebsResolver } from './resolvers/celebs.resolver';
import { TopMoviesComponent } from './pages/moviesflix_choice/top-movies/top-movies.component';
import { TopShowsComponent } from './pages/moviesflix_choice/top-shows/top-shows.component';
import { TopMoviesResolver } from './resolvers/top-movies.resolver';
import { TopShowsResolver } from './resolvers/top-shows.resolver';

export const routes: Routes = [
  {
    path: 'must-watch',
    children: [
      {
        path: 'movies',
        component: TopMoviesComponent,
        resolve: {
          topMovies: TopMoviesResolver
        }
      },
      {
        path: 'shows',
        component: TopShowsComponent,
        resolve: {
          topShows: TopShowsResolver
        }
      }
    ]
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
    path: 'celebs',
    component: CelebsComponent,
    resolve: {
      celebs: celebsResolver
    }
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
