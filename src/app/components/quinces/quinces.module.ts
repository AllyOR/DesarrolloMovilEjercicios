import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuincesPageRoutingModule } from './quinces-routing.module';

import { QuincesPage } from './quinces.page';
import {HeaderPageModule} from "../header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QuincesPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [QuincesPage]
})
export class QuincesPageModule {}
