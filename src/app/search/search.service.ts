import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getService(tipo) {
    return this.http.get('http://www.publico.pt/api/list/' + tipo);
  }
}
