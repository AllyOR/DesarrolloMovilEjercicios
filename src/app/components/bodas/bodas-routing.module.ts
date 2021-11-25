import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodasPage } from './bodas.page';

const routes: Routes = [
  {
    path: '',
    component: BodasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodasPageRoutingModule {}
