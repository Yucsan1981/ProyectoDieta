import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaServicioPage } from './lista-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ListaServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaServicioPageRoutingModule {}
