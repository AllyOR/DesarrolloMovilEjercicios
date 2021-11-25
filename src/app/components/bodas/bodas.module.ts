import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodasPageRoutingModule } from './bodas-routing.module';

import { BodasPage } from './bodas.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BodasPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [BodasPage]
})
export class BodasPageModule {}
