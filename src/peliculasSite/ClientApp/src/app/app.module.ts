import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AbmPeliculasComponent } from './components/abm-peliculas/abm-peliculas.component';
import { AbmActoresComponent } from './components/abm-actores/abm-actores.component';
import { AbmGenerosComponent } from './components/abm-generos/abm-generos.component';
import { HeaderComponent } from './components/header/header.component';
import { AddActorComponent } from './components/abm-actores/add-actor/add-actor.component';
import { ListaActoresComponent } from './components/abm-actores/lista-actores/lista-actores.component';
import { ListaPeliculasComponent } from './components/abm-peliculas/lista-peliculas/lista-peliculas.component';
import { AddPeliculaComponent } from './components/abm-peliculas/add-pelicula/add-pelicula.component';
import { AddGeneroComponent } from './components/abm-generos/add-genero/add-genero.component';
import { ListaGenerosComponent } from './components/abm-generos/lista-generos/lista-generos.component';

import { PeliculaService } from './services/pelicula.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActorService } from './services/actor.service';
import { GeneroService } from './services/genero.service';
import { EditPeliculaComponent } from './components/abm-peliculas/edit-pelicula/edit-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CatalogoComponent,
    AbmPeliculasComponent,
    AbmActoresComponent,
    AbmGenerosComponent,
    HeaderComponent,
    AddActorComponent,
    ListaActoresComponent,
    ListaPeliculasComponent,
    AddPeliculaComponent,
    AddGeneroComponent,
    ListaGenerosComponent,
    EditPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PeliculaService,
    ActorService,
    GeneroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
