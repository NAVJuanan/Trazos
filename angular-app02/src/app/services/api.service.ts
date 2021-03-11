import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // HttpClient
import { Observable } from 'rxjs'; // Observable

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase: string = "https://rickandmortyapi.com/api";
  private urlCharacter: string = "/character";

  // HttpClient
  constructor(private http: HttpClient) { }

  // un Observable es un objeto o colección de elementos asíncronos
  public getInitialCharacters(): Observable<any> {
    const urlApi: string = this.urlBase + this.urlCharacter;

    return this.http.get(urlApi);
  }

  public getCharacters(urlApi: string): Observable<any> {
    return this.http.get(urlApi);
  }

  public getCharacterDetail(urlDetail: string): Observable<any> {
    const urlApi: string = this.urlBase + this.urlCharacter + urlDetail;

    return this.http.get(urlApi);
  }
}
