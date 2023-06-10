import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosMovieService } from '../../service/datos-movie.service';
import { Actor, Tipos } from '../../models/card.model';
@Component({
  selector: 'app-movie-descrip',
  templateUrl: './movie-descrip.component.html',
  styleUrls: ['./movie-descrip.component.css']
})
export class MovieDescripComponent {
  public id: string = '';
  arrDetalle : Tipos  = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: new Date(),
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    tagline: '',
    genres: []
  };
  arrActores : Actor[] = [];
  imgUrl :string = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  defaultImg: string = '../../../assets/unknown-user.png';
  constructor(private route: ActivatedRoute, private dataService: DatosMovieService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  this.dataService.detallePelicula(this.id).subscribe((datos: Tipos) => this.arrDetalle = datos);
  this.dataService.obtenerActores(this.id).subscribe((datos: any) => {
    datos.cast.forEach((element:Actor)=>{
      let {name,profile_path,character} = element;
      profile_path===null? profile_path = this.defaultImg:profile_path = this.imgUrl+profile_path;
      this.arrActores.push({name,profile_path,character})
    })
  });

}
}
