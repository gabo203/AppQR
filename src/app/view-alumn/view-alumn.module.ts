import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewAlumnPageRoutingModule } from './view-alumn-routing.module';
import { ViewAlumnPage } from './view-alumn.page';
import { PokedexComponent } from '../components/pokedex/pokedex.component'; // Importa PokedexComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAlumnPageRoutingModule
  ],
  declarations: [
    ViewAlumnPage,
    PokedexComponent // Declara PokedexComponent aquí
  ]
})
export class ViewAlumnPageModule {}