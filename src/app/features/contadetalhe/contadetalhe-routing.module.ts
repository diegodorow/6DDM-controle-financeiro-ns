// src/app/features/details/details-routing.module.ts

import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ContaDetalheComponent } from './contadetalhe.component'

export const routes: Routes = [
  {
    path: '',
    component: ContaDetalheComponent,
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
})
export class DetailsRoutingModule { }