import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodasLujoPage } from './bodas-lujo.page';

const routes: Routes = [
  {
    path: '',
    component: BodasLujoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodasLujoPageRoutingModule {}
