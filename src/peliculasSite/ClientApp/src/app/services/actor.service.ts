import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44303/api/actors';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all actor data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(actor) {
    console.log('POR HACER EL POST');
    console.log(this.accessPointUrl, actor, {headers: this.headers});
    return this.http.post(this.accessPointUrl, actor, {headers: this.headers}).subscribe();
  }

  public remove(actor) {
    console.log('POR HACER EL DELETE');
    console.log(actor);
    return this.http.delete(this.accessPointUrl + '/' + actor.id, {headers: this.headers}).subscribe();
  }

  public update(actor) {
    console.log('POR HACER EL PUT');
    console.log(actor);
    return this.http.put(this.accessPointUrl + '/' + actor.id, actor, {headers: this.headers}).subscribe();
  }
}

export interface Actor{
  id: number,
  nombre: string,
  apellido: string,
  estado: boolean,
  foto: string
}