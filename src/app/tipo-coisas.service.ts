import { Injectable } from '@angular/core';
import { TipoCoisas } from './models/tipo-coisas.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoCoisasService {

  private apiUrl = 'http://18.231.216.12:8080/api/v1';
  
    constructor(private http: HttpClient) {}
  
    getAll(): Observable<TipoCoisas[]> {
      return this.http.get<TipoCoisas[]>(this.apiUrl + '/tipos');
    }
}
