import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { CadastroLancamentoRoutingModule } from './cadastrolancamento-routing.module'
import { CadastroLancamentoComponent } from './cadastrolancamento.component'

@NgModule({
    imports: [NativeScriptCommonModule, CadastroLancamentoRoutingModule],
    declarations: [CadastroLancamentoComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class CadastroLancamentoModule { }