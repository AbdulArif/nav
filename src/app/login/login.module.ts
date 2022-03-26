import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [NativeScriptCommonModule, LoginRoutingModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule { }
