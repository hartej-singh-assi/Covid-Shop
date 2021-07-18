import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EssentialComponent } from './component/essential/essential.component';
import { FaceShieldComponent } from './component/face-shield/face-shield.component';
import { MaskComponent } from './component/mask/mask.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { PptKitComponent } from './component/ppt-kit/ppt-kit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:"home"
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
