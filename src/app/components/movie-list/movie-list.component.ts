import { Component } from '@angular/core';
import { DatosMovieService } from '../../service/datos-movie.service';
import { Respuesta, Tipos} from '../../models/card.model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  constructor( private peliculas : DatosMovieService){}
  arrPeliculas !: Tipos[]
  arrTrends : any = [];
ngOnInit() {
 this.peliculas.obtenerPeliculas().subscribe((datos: Respuesta) => {
     this.arrPeliculas = datos.results;
 })

 this.peliculas.obtenerPopular().subscribe((datos:any) => {
  this.arrTrends = datos.results
})
}
}
