import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.css']
})
export class ListaGenerosComponent implements OnInit {

  generosData: any;

  constructor(private generoService: GeneroService) {
    this.generoService.get().subscribe(data => {
      this.generosData = data;
    });
  }

  ngOnInit() {
  }

  deleteGenero(genero){
    this.generoService
      .remove(genero)
      .subscribe(genero => console.log('delete ok', genero));
  }

}