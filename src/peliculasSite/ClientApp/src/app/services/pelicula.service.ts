import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44303/api/pelicula';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all pelicula data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(pelicula) {
    console.log('POR HACER EL POST');
    console.log(pelicula);
    return this.http.post(this.accessPointUrl, pelicula, {headers: this.headers}).subscribe();
  }

  public remove(pelicula) {
    console.log('POR HACER EL DELETE');
    console.log(pelicula);
    return this.http.delete(this.accessPointUrl + '/' + pelicula.id, {headers: this.headers}).subscribe();
  }

  public update(pelicula) {
    console.log('POR HACER EL PUT');
    console.log(pelicula);
    return this.http.put(this.accessPointUrl + '/' + pelicula.id, pelicula, {headers: this.headers}).subscribe();
  }
}
