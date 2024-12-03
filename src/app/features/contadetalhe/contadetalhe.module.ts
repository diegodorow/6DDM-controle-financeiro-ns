// src/app/features/details/details.module.ts

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { DetailsRoutingModule } from './contadetalhe-routing.module'
import { ContaDetalheComponent } from './contadetalhe.component'

@NgModule({
  imports: [NativeScriptCommonModule, DetailsRoutingModule],
  declarations: [ContaDetalheComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ContaDetalheModule { }