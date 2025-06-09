export interface PopularCelebsResponse {
  page: number;
  results: Celebrity[];
  total_pages: number;
  total_results: number;
}

export interface Celebrity {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string | null;
  known_for: KnownFor[];
}

export interface KnownFor {
  title?: string;         // For movies
  name?: string;          // For TV shows
  poster_path: string | null;
}
