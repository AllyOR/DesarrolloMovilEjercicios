import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuincesPageRoutingModule } from './quinces-routing.module';

import { QuincesPage } from './quinces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuincesPageRoutingModule
  ],
  declarations: [QuincesPage]
})
export class QuincesPageModule {}
