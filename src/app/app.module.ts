
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosMovieService } from './service/datos-movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDescripComponent } from './movie-descrip/movie-descrip.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDescripComponent,
    MovieListComponent
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
