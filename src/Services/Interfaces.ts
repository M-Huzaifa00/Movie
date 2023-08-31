export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  name: string;
}

export interface fetchResponse<T> {
  genres: T[];
  length: number;
}

export interface fetchMovieResponse<T> {
  results: T[];
  total_pages: number;
  page: number;
}

interface Production_countries {
  name: string;
}

export interface movieDetail {
  budget: number;
  genres: Genre[];
  original_title: string;
  overview: string;
  production_companies: Genre[];
  production_countries: Production_countries[];
  release_date: string;
  status: string;
}

interface key {
  key: string;
  type: string;
  name: string;
}
export interface MovieVideo {
  results: key[];
}

interface backdrop {
  file_path: string;
}
export interface Images {
  backdrops: backdrop[];
}

export interface TVDetails {
  first_air_date: string;
  genres: Genre[];
  number_of_episodes: number;
  number_of_seasons: number;
  original_name: string;
  overview: string;
  status: string;
  production_companies: Genre[];
}
