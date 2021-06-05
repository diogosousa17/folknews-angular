import { NoticiaComponent } from './noticia/noticia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { DestaquesComponent } from './destaques/destaques.component';

const routes: Routes = [
  {path: '', redirectTo:'/destaques', pathMatch:'full'},
  {path: 'destaques', component: DestaquesComponent},
  {path: 'desporto', component: CategoriasComponent},
  {path: 'saude', component: CategoriasComponent},
  {path: 'economia', component: CategoriasComponent},
  {path: 'pais', component: CategoriasComponent},
  {path: 'mundo', component: CategoriasComponent},
  {path: 'cultura', component: CategoriasComponent},
  {path: 'noticia/:id', component: NoticiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
