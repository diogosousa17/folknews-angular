import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriasComponent } from './categorias/categorias.component'
import { DestaquesService } from './destaques/destaques.service';
import { NoticiaComponent } from './noticia/noticia.component';
import { CategoriasService } from './categorias/categorias.service';
import { CardsComponent } from './cards/cards.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NoticiaService } from './noticia/noticia.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DestaquesComponent,
    CategoriasComponent,
    NoticiaComponent,
    CardsComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    LayoutModule,
    HttpClientModule,
    MatMenuModule,
    NgbModule,
    MatFormFieldModule
  ],
  providers: [DestaquesService, CategoriasService, NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
