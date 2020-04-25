import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginPage } from './login/login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationRoutingModule
  ],
  declarations: [LoginPage]
})
export class AuthenticationModule {}
