import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoJsonPageRoutingModule } from './listado-json-routing.module';

import { ListadoJsonPage } from './listado-json.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoJsonPageRoutingModule
  ],
  declarations: [ListadoJsonPage]
})
export class ListadoJsonPageModule {}
