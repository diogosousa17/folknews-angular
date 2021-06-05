import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestaquesService {
  
  constructor(private http: HttpClient) { }
  
  getDestaques() {
    return this.http.get('http://www.publico.pt/api/list/ultimas');
  }
}
