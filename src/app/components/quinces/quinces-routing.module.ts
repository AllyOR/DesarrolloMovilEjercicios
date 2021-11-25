import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuincesPage } from './quinces.page';

const routes: Routes = [
  {
    path: '',
    component: QuincesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuincesPageRoutingModule {}
