import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosMovieService } from '../service/datos-movie.service';
@Component({
  selector: 'app-movie-descrip',
  templateUrl: './movie-descrip.component.html',
  styleUrls: ['./movie-descrip.component.css']
})
export class MovieDescripComponent {
  public id: string = '';
  arrDetalle: any = {}
  arrActores : any = []
  imgUrl :string = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  constructor(private route: ActivatedRoute, private dataService: DatosMovieService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  this.dataService.detallePelicula(this.id).subscribe((datos: any) => this.arrDetalle = datos);
  this.dataService.obtenerActores(this.id).subscribe((datos: any) => this.arrActores = datos);
}
}
