import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EssentialComponent } from './component/essential/essential.component';
import { MaskComponent } from './component/mask/mask.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { PptKitComponent } from './component/ppt-kit/ppt-kit.component';
import { N95Component } from './component/n95/n95.component';
import { CoolMaskComponent } from './component/cool-mask/cool-mask.component';
import { TurbanMaskComponent } from './component/turban-mask/turban-mask.component';
import { MedicareComponent } from './component/medicare/medicare.component';
import { GearComponent } from './component/gear/gear.component';
import { HeadGearComponent } from './component/head-gear/head-gear.component';
import { sanitizeIdentifier } from '@angular/compiler';
import { SanitizerComponent } from './component/sanitizer/sanitizer.component';
import { InstrumentsComponent } from './component/instruments/instruments.component';

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
    component: MaskComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo:"/mask/n95"
      },
      {
        path:'n95',
        component:N95Component
      },
      {
        path:'cool-mask',
        component:CoolMaskComponent
      },
      {
        path:'turban-mask',
        component:TurbanMaskComponent
      },
    ]
  },

  {
    path:'gear',
    component:GearComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo:"/gear/head-gear"
      },
      {
        path:'head-gear',
        component:HeadGearComponent
      },
      {
        path:'ppt-kit',
        component: PptKitComponent
      },
    ]
  },

  {
    path:'medicare',
    component: MedicareComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo:"/medicare/medicine"
      },
      {
        path:'medicine',
        component:MedicineComponent
      },
      {
        path:'sanitizer',
        component: SanitizerComponent
      },
      {
        path:'instrument',
        component: InstrumentsComponent
      },
    ]
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
