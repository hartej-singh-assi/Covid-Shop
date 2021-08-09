import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { MaskComponent } from './component/mask/mask.component';
import { PptKitComponent } from './component/ppt-kit/ppt-kit.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { EssentialComponent } from './component/essential/essential.component';
import { N95Component } from './component/n95/n95.component';
import { CoolMaskComponent } from './component/cool-mask/cool-mask.component';
import { TurbanMaskComponent } from './component/turban-mask/turban-mask.component';
import { HeadGearComponent } from './component/head-gear/head-gear.component';
import { SanitizerComponent } from './component/sanitizer/sanitizer.component';
import { InstrumentsComponent } from './component/instruments/instruments.component';
import { GearComponent } from './component/gear/gear.component';
import { MedicareComponent } from './component/medicare/medicare.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MaskComponent,
    PptKitComponent,
    MedicineComponent,
    EssentialComponent,
    N95Component,
    CoolMaskComponent,
    TurbanMaskComponent,
    HeadGearComponent,
    SanitizerComponent,
    InstrumentsComponent,
    GearComponent,
    MedicareComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
