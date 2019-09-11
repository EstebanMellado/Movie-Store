import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44303/api/genero';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all genero data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(genero) {
    console.log('POR HACER EL POST');
    console.log(genero);
    return this.http.post(this.accessPointUrl, genero, {headers: this.headers});
  }

  public remove(genero) {
    console.log('POR HACER EL DELETE');
    console.log(genero);
    return this.http.delete(this.accessPointUrl + '/' + genero.id, {headers: this.headers});
  }

  public update(genero) {
    console.log('POR HACER EL PUT');
    console.log(genero);
    return this.http.put(this.accessPointUrl + '/' + genero.id, genero, {headers: this.headers});
  }
}

export interface genero{
  id: number,
  nombre: string,
  apellido: string,
  estado: boolean,
  foto: string
}