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
    loadChildren: () => import('./bodas/bodas.module').then( m => m.BodasPageModule)
  },
  {
    path: 'quinces',
    loadChildren: () => import('./quinces/quinces.module').then( m => m.QuincesPageModule)
  },
  {
    path: 'fiestas',
    loadChildren: () => import('./fiestas/fiestas.module').then( m => m.FiestasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
