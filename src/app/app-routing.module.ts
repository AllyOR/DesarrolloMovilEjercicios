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
    path: 'bodas',
    loadChildren: () => import('./components/bodas/bodas.module').then(m => m.BodasPageModule)
  },
  {
    path: 'quinces',
    loadChildren: () => import('./components/quinces/quinces.module').then(m => m.QuincesPageModule)
  },
  {
    path: 'fiestas',
    loadChildren: () => import('./components/fiestas/fiestas.module').then(m => m.FiestasPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./components/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'bodas-lujo',
    loadChildren: () => import('./components/bodas-lujo/bodas-lujo.module').then( m => m.BodasLujoPageModule)
  },
  {
    path: 'fiestas-lujo',
    loadChildren: () => import('./components/fiestas-lujo/fiestas-lujo.module').then( m => m.FiestasLujoPageModule)
  },
  {
    path: 'quinces-lujo',
    loadChildren: () => import('./components/quinces-lujo/quinces-lujo.module').then( m => m.QuincesLujoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
