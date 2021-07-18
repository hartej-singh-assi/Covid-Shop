import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:"home"
  },
  {
    path: 'home',
    component: HomeComponent
  }
=======
import { EssentialComponent } from './component/essential/essential.component';
import { FaceShieldComponent } from './component/face-shield/face-shield.component';
import { MaskComponent } from './component/mask/mask.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { PptKitComponent } from './component/ppt-kit/ppt-kit.component';

const routes: Routes = [
  {
    path:'mask',
    component: MaskComponent
  },
  {
    path:' face-shield',
    component: FaceShieldComponent
  },
  {
    path:'medicine',
    component: MedicineComponent
  },
  {
    path:'ppt-kit',
    component: PptKitComponent
  },
  {
    path:'essential',
    component: EssentialComponent
  },
>>>>>>> 34f25b3ce65685623802fce5aeaf2d91bbbb0d55
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
