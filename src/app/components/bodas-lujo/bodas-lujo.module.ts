import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodasLujoPageRoutingModule } from './bodas-lujo-routing.module';

import { BodasLujoPage } from './bodas-lujo.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BodasLujoPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [BodasLujoPage]
})
export class BodasLujoPageModule {}
