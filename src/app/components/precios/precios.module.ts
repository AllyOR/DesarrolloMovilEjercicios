import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreciosPageRoutingModule } from './precios-routing.module';

import { PreciosPage } from './precios.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreciosPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [PreciosPage]
})
export class PreciosPageModule {}
