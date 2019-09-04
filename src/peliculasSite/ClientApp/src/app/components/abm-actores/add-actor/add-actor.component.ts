import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  selectedFoto: File = null;

  newActor: any = {
    nombre: '',
    apellido: '',
    estado: 0,
    foto: ''
  }

  constructor(private actorService: ActorService) { }

  ngOnInit() {
  }

  private clearActorInfo = function () {
    // Create an empty Pelicula object
    this.newActor = {
      nombre: '',
      apellido: '',
      estado: 0,
      foto: ''
    };
  };

  agregarNuevoActor() {

    if(this.selectedFoto != null){
      this.guardarFoto(this.selectedFoto);
    }

    this.actorService.add(this.newActor);
    this.clearActorInfo();
  }

  onFileSelected(event){
    this.selectedFoto = <File>event.target.files[0];
    //console.log(this.selectedFoto);
    this.newActor.foto = this.selectedFoto.name;
  }

  guardarFoto(foto){
    
  }

}
