import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDescripComponent } from './components/movie-descrip/movie-descrip.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListGenresComponent } from './components/movie-list-genres/movie-list-genres.component';

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: 'descrip', component: MovieDescripComponent},
  {path:'list-genre',component: MovieListGenresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
