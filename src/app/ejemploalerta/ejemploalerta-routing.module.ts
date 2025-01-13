import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploalertaPage } from './ejemploalerta.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploalertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploalertaPageRoutingModule {}
