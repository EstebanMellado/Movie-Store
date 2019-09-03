import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  peliculasData: any;

  constructor(private peliculaService: PeliculaService) {
    this.peliculaService.get().subscribe(data => {
      this.peliculasData = data;
    })
   }

  ngOnInit() {
  }

}
