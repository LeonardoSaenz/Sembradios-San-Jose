import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { InicioPageRoutingModule } from '../pages/inicio/inicio-routing.module';
import { Terreno1PageRoutingModule } from '../pages/terreno1/terreno1-routing.module';
import { InformacionPageRoutingModule } from '../pages/informacion/informacion-routing.module';
import { RouteConfigLoadEnd, RouteConfigLoadStart, RouteReuseStrategy, RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,

  ],
})
export class ComponentsModule { }
