import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosMovieService {

  constructor(private httpCLient: HttpClient) { }
  
  obtenerPeliculas()  {
    return this.httpCLient.get('https://api.themoviedb.org/3/discover/movie/?api_key=9b3a1c9fc48ea5311d0a780bfb57f952');
  }

  obtenerPopular(){
    return this.httpCLient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=9b3a1c9fc48ea5311d0a780bfb57f952');
  }
    detallePelicula(id: string){
     return  this.httpCLient.get(`https://api.themoviedb.org/3/movie/${parseInt(id)}?api_key=9b3a1c9fc48ea5311d0a780bfb57f952`);
  } 
  obtenerActores(id:string){
     return this.httpCLient.get(`https://api.themoviedb.org/3/movie/${parseInt(id)}/credits?api_key=9b3a1c9fc48ea5311d0a780bfb57f952`);
  }
}
