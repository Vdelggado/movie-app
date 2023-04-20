import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
    constructor(private router: Router){}
      arrPeliculas : any =[]
    @Input() peliculas: any = [];
   imgUrl : string ='https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

   mostrarDescrip(id: number){
      this.router.navigate(['/descrip'],{ queryParams: { id: id } });
   }
}
