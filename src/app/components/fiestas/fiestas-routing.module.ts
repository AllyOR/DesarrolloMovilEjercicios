import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiestasPage } from './fiestas.page';

const routes: Routes = [
  {
    path: '',
    component: FiestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiestasPageRoutingModule {}
