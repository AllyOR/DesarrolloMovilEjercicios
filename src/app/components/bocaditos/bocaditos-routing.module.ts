import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BocaditosPage } from './bocaditos.page';

const routes: Routes = [
  {
    path: '',
    component: BocaditosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BocaditosPageRoutingModule {}
