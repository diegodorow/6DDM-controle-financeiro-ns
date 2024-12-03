import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ContaService } from '../../core/services/conta.service'
import { LancamentoService } from '../../core/services/lancamento.service'
import { ContaModel } from '../../core/models/conta.model'
import { RouterExtensions } from '@nativescript/angular'

@Component({
    moduleId: module.id,
    selector: 'ns-contadetalhe',
    templateUrl: 'contadetalhe.component.html',
    styleUrls: ["./contadetalhe.component.css"]
})
export class ContaDetalheComponent {
    contas = this.contaService.getContas()
    lancamentos = this.lancamentoService.getLancamentos()
    conta: ContaModel | undefined = undefined
    constructor(
        private activatedRoute: ActivatedRoute,
        private contaService: ContaService,
        private lancamentoService: LancamentoService,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.activatedRoute.snapshot.params.id
        if (id) {
            this.conta = this.contaService.getContaById(id)
        }
    }
    onClick() {
        this.routerExtensions.navigate(['cadastrolancamento', this.contas])
    }
}