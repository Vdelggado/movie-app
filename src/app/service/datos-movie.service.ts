import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta,Tipos,Generos} from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosMovieService {

  constructor(private httpCLient: HttpClient) { }

  obtenerPeliculas(): Observable<Respuesta> {
    return this.httpCLient.get<Respuesta>('https://api.themoviedb.org/3/discover/movie/?api_key=9b3a1c9fc48ea5311d0a780bfb57f952');
  }

  obtenerPopular(): Observable<Respuesta>{
    return this.httpCLient.get<Respuesta>('https://api.themoviedb.org/3/trending/movie/day?api_key=9b3a1c9fc48ea5311d0a780bfb57f952');
  }

  detallePelicula(id: string): Observable<Tipos>{
     return  this.httpCLient.get<Tipos>(`https://api.themoviedb.org/3/movie/${parseInt(id)}?api_key=9b3a1c9fc48ea5311d0a780bfb57f952`);
  }

  obtenerActores(id:string){
     return this.httpCLient.get(`https://api.themoviedb.org/3/movie/${parseInt(id)}/credits?api_key=9b3a1c9fc48ea5311d0a780bfb57f952`);
  }

  obtenerGeneros(){
    return this.httpCLient.get<Generos>('https://api.themoviedb.org/3/genre/movie/list?api_key=9b3a1c9fc48ea5311d0a780bfb57f952');
  }
  peliculaXGenero(id: number){
    return this.httpCLient.get<Respuesta>(`https://api.themoviedb.org/3/discover/movie?api_key=9b3a1c9fc48ea5311d0a780bfb57f952&with_genres=${id}`)
  }
}
