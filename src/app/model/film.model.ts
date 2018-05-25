export interface Film {
    id : number;
    name : string;
    type : string;
    detailInfo? : string;
    area? : string;
    score? : string;
    level? : string;
    img? : string;
    path : string;
}

export interface HomeFilm {
    id:number,
    name : string,
    index : string,
    img : string,
    extend ? : string,
    description : string
}

export interface CombineFilm {
    film : Film,
    homeFilm : HomeFilm
}