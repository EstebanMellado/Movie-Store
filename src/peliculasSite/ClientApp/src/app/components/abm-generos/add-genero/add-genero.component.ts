import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-add-genero',
  templateUrl: './add-genero.component.html',
  styleUrls: ['./add-genero.component.css']
})
export class AddGeneroComponent implements OnInit {

  newGenero: any = {
    nombre: '',
    estado: 0
  }

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
  }

  private clearGeneroInfo = function () {
    this.newGenero = {
      nombre: '',
      estado: 0
    };
  };

  agregarNuevoGenero() {
    this.generoService
      .add(this.newGenero)
      .subscribe(genero => console.log('post ok', genero));

    this.clearGeneroInfo();
  }

}
