import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/inicio/components/nav-bar/nav-bar.component';
import { BodyComponent } from './components/inicio/components/body/body.component';
import { FooterComponent } from './components/inicio/components/footer/footer.component';
import { BaseComponent } from './components/inicio/base/base.component';
import { FBaseComponent } from './components/favoritos/f-base/f-base.component';
import { AlbumnesComponent } from './components/catalogo/albumnes/albumnes.component';
import { CantantesComponent } from './components/catalogo/cantantes/cantantes.component';
import { GenerosComponent } from './components/catalogo/generos/generos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    FooterComponent,
    BaseComponent,
    FBaseComponent,
    AlbumnesComponent,
    CantantesComponent,
    GenerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
