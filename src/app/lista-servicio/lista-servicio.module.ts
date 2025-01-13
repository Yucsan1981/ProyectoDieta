import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaServicioPageRoutingModule } from './lista-servicio-routing.module';

import { ListaServicioPage } from './lista-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaServicioPageRoutingModule
  ],
  declarations: [ListaServicioPage]
})
export class ListaServicioPageModule {}
