import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InvMaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, InvMaterialModule],
  declarations: [HeaderComponent, LoginComponent],
  exports: [HeaderComponent],
})
export class RoutesModule {}
