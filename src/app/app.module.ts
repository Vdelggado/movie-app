
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosMovieService } from './service/datos-movie.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDescripComponent } from './components/movie-descrip/movie-descrip.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { GendersComponent } from './components/genders/genders.component';
import { MovieListGenresComponent } from './components/movie-list-genres/movie-list-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDescripComponent,
    MovieListComponent,
    GendersComponent,
    MovieListGenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatosMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
