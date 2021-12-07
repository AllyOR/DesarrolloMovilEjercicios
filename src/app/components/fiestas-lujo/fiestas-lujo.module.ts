import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiestasLujoPageRoutingModule } from './fiestas-lujo-routing.module';

import { FiestasLujoPage } from './fiestas-lujo.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FiestasLujoPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [FiestasLujoPage]
})
export class FiestasLujoPageModule {}
