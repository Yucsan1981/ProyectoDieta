import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploalertaPageRoutingModule } from './ejemploalerta-routing.module';

import { EjemploalertaPage } from './ejemploalerta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploalertaPageRoutingModule
  ],
  declarations: [EjemploalertaPage]
})
export class EjemploalertaPageModule {}
