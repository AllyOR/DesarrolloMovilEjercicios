import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuincesLujoPageRoutingModule } from './quinces-lujo-routing.module';

import { QuincesLujoPage } from './quinces-lujo.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QuincesLujoPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [QuincesLujoPage]
})
export class QuincesLujoPageModule {}
