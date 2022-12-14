import { SharedModule } from '../../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LicenseRegisterComponent } from './license-register.component';
import { RouterModule } from '@angular/router';
import { LicenseRegisterRoutes } from './license-register.routing';


@NgModule({
  declarations: [LicenseRegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(LicenseRegisterRoutes)
  ]
})
export class LicenseRegisterModule { }
