export interface Genre{
    id:number;
    name:string;
}

export interface Movie{
    id:number;
    original_title:string;
    poster_path:string;
    name:string;
}

export interface fetchResponse<T>{
    genres:T[];
    length:number;
}

export interface fetchMovieResponse<T>{
    results:T[];
    total_pages:number;
    page:number;
}