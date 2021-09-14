import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodasPageRoutingModule } from './bodas-routing.module';

import { BodasPage } from './bodas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodasPageRoutingModule
  ],
  declarations: [BodasPage]
})
export class BodasPageModule {}
