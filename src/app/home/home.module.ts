import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, ReactiveFormsModule],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule { }
