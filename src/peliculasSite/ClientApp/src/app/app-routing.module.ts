import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AbmActoresComponent } from './components/abm-actores/abm-actores.component';
import { AbmGenerosComponent } from './components/abm-generos/abm-generos.component';
import { AbmPeliculasComponent } from './components/abm-peliculas/abm-peliculas.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'actores', component: AbmActoresComponent },
  { path: 'generos', component: AbmGenerosComponent },
  { path: 'peliculas', component: AbmPeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
