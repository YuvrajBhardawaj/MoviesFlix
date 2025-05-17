export interface SearchResponse {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

export interface MovieResult {
  id: number;
  media_type: 'movie';
  title: string;
  original_title: string;
  overview: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  release_date?: string;
  original_language?: string;
  adult: boolean;
  genre_ids?: number[];
  popularity: number;
  vote_average?: number;
  vote_count?: number;
  video?: boolean;
}

export interface TVResult {
  id: number;
  media_type: 'tv';
  name: string;
  original_name: string;
  overview: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  first_air_date?: string;
  original_language?: string;
  genre_ids?: number[];
  popularity: number;
  vote_average?: number;
  vote_count?: number;
  adult?: boolean;
  // other TV-specific fields can be added here
}

export interface PersonResult {
  id: number;
  media_type: 'person';
  name: string;
  original_name: string;
  adult: boolean;
  gender?: number;  // 1=female, 0/2=male or unknown, per TMDB convention
  known_for_department?: string;  // e.g. Acting, Production
  popularity: number;
  profile_path?: string | null;
  known_for?: (MovieResult | TVResult)[];
}
