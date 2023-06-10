import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Respuesta,Tipos } from 'src/app/models/card.model';
import { DatosMovieService } from 'src/app/service/datos-movie.service';

@Component({
  selector: 'app-movie-list-genres',
  templateUrl: './movie-list-genres.component.html',
  styleUrls: ['./movie-list-genres.component.css']
})
export class MovieListGenresComponent {
  id: number=0;
  peliculas: Tipos[] =[];
  imgUrl : string ='https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  constructor(private route: ActivatedRoute, private dataService: DatosMovieService, private router: Router){

  }
 ngOnInit(){
  this.route.queryParams.subscribe(params => {
      this.id= +params['id'];
    });
  this.dataService.peliculaXGenero(this.id).subscribe((data:Respuesta)=>{
    this.peliculas = data.results;
  })

 }

 descripcionPelicula(id:number){
    this.router.navigate(['/descrip'], {queryParams: {id: id}})
}
}
