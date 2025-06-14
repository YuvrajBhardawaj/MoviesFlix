export interface TrendingMovies {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}
export interface TrendingMoviesPageination{
  page: number;
  results: TrendingMovies[];
  total_pages: number;
  total_results: number;
}
export interface TrendingShowsPagination{
  page: number;
  results: TrendingShows[];
  total_pages: number;
  total_results: number;
}
export interface TrendingShows{
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
}
