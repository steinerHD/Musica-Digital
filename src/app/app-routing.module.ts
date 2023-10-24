import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/inicio/base/base.component';
import { FBaseComponent } from './components/favoritos/f-base/f-base.component';
import { AlbumnesComponent } from './components/catalogo/albumnes/albumnes.component';
import { CantantesComponent } from './components/catalogo/cantantes/cantantes.component';
import { GenerosComponent } from './components/catalogo/generos/generos.component';

const routes: Routes = [
  {path: 'inicio', component: BaseComponent},
  {path: 'favoritos', component: FBaseComponent},
  {path: '', component: BaseComponent},
  {path: 'albumnes', component: AlbumnesComponent},
  {path: 'cantantes', component: CantantesComponent},
  {path:'generos', component: GenerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
