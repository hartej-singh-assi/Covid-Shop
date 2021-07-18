import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
<<<<<<< HEAD
import { HomeComponent } from './component/home/home.component';
=======
import { MaskComponent } from './component/mask/mask.component';
import { FaceShieldComponent } from './component/face-shield/face-shield.component';
import { PptKitComponent } from './component/ppt-kit/ppt-kit.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { EssentialComponent } from './component/essential/essential.component';
>>>>>>> 34f25b3ce65685623802fce5aeaf2d91bbbb0d55

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
<<<<<<< HEAD
    HomeComponent
=======
    MaskComponent,
    FaceShieldComponent,
    PptKitComponent,
    MedicineComponent,
    EssentialComponent
>>>>>>> 34f25b3ce65685623802fce5aeaf2d91bbbb0d55
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
