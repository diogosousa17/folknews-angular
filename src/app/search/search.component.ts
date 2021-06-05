import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  service: any;
  tipo = this.router.url;

  constructor(private searchService: SearchService, private router:Router) { }

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.searchService.getService(this.tipo).subscribe(response => this.service = response);
  }

  selectService(tipo) {
    tipo = tipo;
    this.getService();
  }


}
