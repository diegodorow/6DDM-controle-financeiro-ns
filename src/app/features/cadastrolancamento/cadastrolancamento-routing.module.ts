import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { CadastroLancamentoComponent } from './cadastrolancamento.component'

export const routes: Routes = [
    {
        path: '',
        component: CadastroLancamentoComponent,
    },
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
})
export class CadastroLancamentoRoutingModule { }