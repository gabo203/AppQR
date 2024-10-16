import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAlumnPageRoutingModule } from './view-alumn-routing.module';

import { ViewAlumnPage } from './view-alumn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAlumnPageRoutingModule
  ],
  declarations: [ViewAlumnPage]
})
export class ViewAlumnPageModule {}
