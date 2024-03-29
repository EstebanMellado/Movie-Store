import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-add-pelicula',
  templateUrl: './add-pelicula.component.html',
  styleUrls: ['./add-pelicula.component.css']
})
export class AddPeliculaComponent implements OnInit {

  newPelicula: any = {
    nombre: '',
    resumen: '',
    comentarios: '',
    actores: '',
    genero: '',
    anio: '',
    estado: 0,
    imagen: ''
  }

  actoresData: any;
  generosData: any;

  constructor(private peliculaService: PeliculaService, private actorService: ActorService, private generoService: GeneroService) {
    this.obtenerActores();
    this.obtenerGeneros();
  }
  
  ngOnInit() {
  }
  
  private obtenerActores(){
    this.actorService
      .get()
      .subscribe(data => {
        this.actoresData = data;
      });
  }
  
  private obtenerGeneros(){
    this.generoService
      .get()
      .subscribe(data => {
        this.generosData = data;
      });
  }

  private clearPeliculaInfo = function () {
    this.newPelicula = {
      nombre: '',
      resumen: '',
      comentarios: '',
      actores: '',
      genero: '',
      anio: '',
      estado: 0,
      imagen: ''
    };
  };

  agregarNuevaPelicula() {
    this.peliculaService
      .add(this.newPelicula)
      .subscribe(pelicula => console.log('post ok', pelicula));
    this.clearPeliculaInfo();
  }

}
