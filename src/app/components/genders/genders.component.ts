import { Component } from '@angular/core';
import { Generos, Respuesta, Tipos } from '../../models/card.model';
import {  DatosMovieService } from '../../service/datos-movie.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-genders',
  templateUrl: './genders.component.html',
  styleUrls: ['./genders.component.css']
})
export class GendersComponent {
  constructor( private datosService: DatosMovieService, private router: Router) { }

  generos: Generos[] =[];

  ngOnInit(): void {
    this.datosService.obtenerGeneros().subscribe((data:any) =>{
        this.generos = data.genres;
    })
  }
  peliculaXGenero(id:number){
      this.router.navigate(['/list-genre'], {queryParams: {id: id}})
  }

}
