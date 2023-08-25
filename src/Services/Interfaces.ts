export interface Genre{
    id:number;
    name:string;
}

export interface fetchResponse<T>{
    genres:T[];
    length:number;
}