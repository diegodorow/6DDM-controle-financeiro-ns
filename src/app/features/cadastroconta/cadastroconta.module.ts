import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { CadastroRoutingModule } from './cadastroconta-routing.module'
import { CadastroContaComponent } from './cadastroconta.component'

@NgModule({
    imports: [NativeScriptCommonModule, CadastroRoutingModule],
    declarations: [CadastroContaComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class CadastroContaModule { }