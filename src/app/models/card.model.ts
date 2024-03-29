interface Respuesta{
    page:    number;
    results: Tipos[];
}


 interface Tipos {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    tagline:           string;
    genres:            Generos[]
}

interface Generos{
    id: number;
    name: string;
}
interface Actor{
  name: string;
  profile_path:string;
  character: string;
}



export { Respuesta, Tipos,Generos, Actor };

