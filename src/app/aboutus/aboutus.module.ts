import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbountCompanyComponent } from './abount-company/abount-company.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';



@NgModule({
  declarations: [
    AbountCompanyComponent,
    AboutCeoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutusModule { }
