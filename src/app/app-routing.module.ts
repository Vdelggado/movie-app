import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDescripComponent } from './movie-descrip/movie-descrip.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
{path: '', component: MovieListComponent},
 {path: 'descrip', component: MovieDescripComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
