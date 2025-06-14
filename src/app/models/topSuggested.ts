export interface TopRatedMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface TopRatedShowsResponse {
  page: number;
  results: Show[];
  total_pages: number;
  total_results: number;
}
export interface Show {
  id: number;
  name: string;              
  poster_path: string;
  vote_average: number;
}