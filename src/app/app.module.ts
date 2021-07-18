import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { MaskComponent } from './component/mask/mask.component';
import { FaceShieldComponent } from './component/face-shield/face-shield.component';
import { PptKitComponent } from './component/ppt-kit/ppt-kit.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { EssentialComponent } from './component/essential/essential.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MaskComponent,
    FaceShieldComponent,
    PptKitComponent,
    MedicineComponent,
    EssentialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
