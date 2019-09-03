import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css']
})
export class ListaActoresComponent implements OnInit {

  actoresData: any;

  constructor(private actorService: ActorService) {
    this.actorService.get().subscribe(data => {
      this.actoresData = data;
    });
  }

  ngOnInit() {
  }

  deleteActor(actor){
    this.actorService.remove(actor);
  }

}
