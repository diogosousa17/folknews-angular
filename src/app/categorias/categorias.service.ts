import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(tipo) {
    return this.http.get('http://www.publico.pt/api/list/' + tipo);
  }z
}
