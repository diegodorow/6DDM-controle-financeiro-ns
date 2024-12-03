import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { CadastroContaComponent } from './cadastroconta.component'

export const routes: Routes = [
    {
        path: '',
        component: CadastroContaComponent,
    },
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
})
export class CadastroRoutingModule { }