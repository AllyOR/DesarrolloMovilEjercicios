import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuincesLujoPage } from './quinces-lujo.page';

const routes: Routes = [
  {
    path: '',
    component: QuincesLujoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuincesLujoPageRoutingModule {}
