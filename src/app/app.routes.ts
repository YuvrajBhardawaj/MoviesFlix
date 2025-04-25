import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeResolver } from './resolvers/home.resolver';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { movieDetailsResolver } from './resolvers/movie-details.resolver';

export const routes: Routes = [
  {
    path: ':id',
    component: MovieDetailsComponent, 
    resolve: {
      details: movieDetailsResolver
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
