import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coisas } from './models/coisas.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoisasService {

  private apiUrl = 'http://18.231.216.12:8080/api/v1';

  constructor(private http: HttpClient) {}

  getCoisasByTipo(tipo: string): Observable<Coisas[]> {
    return this.http.get<Coisas[]>(this.apiUrl + `/coisas/${tipo}`);
  }
}
