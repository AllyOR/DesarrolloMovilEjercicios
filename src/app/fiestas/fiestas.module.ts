import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiestasPageRoutingModule } from './fiestas-routing.module';

import { FiestasPage } from './fiestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiestasPageRoutingModule
  ],
  declarations: [FiestasPage]
})
export class FiestasPageModule {}
