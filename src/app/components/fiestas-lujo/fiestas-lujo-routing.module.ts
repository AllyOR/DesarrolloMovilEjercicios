import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiestasLujoPage } from './fiestas-lujo.page';

const routes: Routes = [
  {
    path: '',
    component: FiestasLujoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiestasLujoPageRoutingModule {}
