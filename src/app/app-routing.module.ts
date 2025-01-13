import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'ejemploalerta',
    loadChildren: () => import('./ejemploalerta/ejemploalerta.module').then( m => m.EjemploalertaPageModule)
  },
  {
    path: 'listado-json/:id',
    loadChildren: () => import('./listado-json/listado-json.module').then( m => m.ListadoJsonPageModule)
  },
  {
    path: 'lista-servicio',
    loadChildren: () => import('./lista-servicio/lista-servicio.module').then( m => m.ListaServicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
