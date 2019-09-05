import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  peliculasData: any;


  constructor(private peliculaService: PeliculaService) {
    this.getPeliculas();
  }

  ngOnInit() {
  }
  
  getPeliculas(){
    this.peliculaService.get().subscribe(data => {
      this.peliculasData = data;
    });
  }
}
