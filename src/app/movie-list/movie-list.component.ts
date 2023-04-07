import { Component } from '@angular/core';
import { DatosMovieService } from '../datos-movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  constructor( private peliculas : DatosMovieService){}
  arrPeliculas : any =[];
  arrTrends : any = [];
ngOnInit() {
 this.peliculas.obtenerPeliculas().subscribe((datos: any) => {
     this.arrPeliculas = datos.results;
 })

 this.peliculas.obtenerPopular().subscribe((datos: any) => {
  this.arrTrends = datos.results
})
}
}
