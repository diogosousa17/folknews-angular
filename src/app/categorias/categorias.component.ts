import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  destaques: any;
  tipo = this.router.url;


  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria() {
    this.categoriasService.getCategorias(this.tipo).subscribe(response => this.destaques = response);
  }

  selectCategoria(tipo) {
    tipo = tipo;
    this.getCategoria();
  }
}