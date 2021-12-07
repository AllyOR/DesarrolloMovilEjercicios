import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BocaditosPageRoutingModule } from './bocaditos-routing.module';

import { BocaditosPage } from './bocaditos.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BocaditosPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [BocaditosPage]
})
export class BocaditosPageModule {}
