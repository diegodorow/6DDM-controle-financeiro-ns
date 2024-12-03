import { Injectable } from '@angular/core'
import { LancamentoModel } from '../models/lancamento.model'

@Injectable({
    providedIn: 'root',
})
export class LancamentoService {

    private lancamentos: LancamentoModel[] = [
        {
            id: 1,
            descricao: 'Salário',
            tipo: 'Entrada',
            acao: 'Entrada',
            valor: 5545.45
        },
        {
            id: 2,
            descricao: '13º Salário',
            tipo: 'Entrada',
            acao: 'Entrada',
            valor: 1323.23
        },
        {
            id: 3,
            descricao: 'Férias',
            tipo: 'Entrada',
            acao: 'Entrada',
            valor: 1616.16
        },
        {
            id: 4,
            descricao: 'Combustivel',
            tipo: 'Combustível',
            acao: 'Saída',
            valor: 198.98
        },
        {
            id: 5,
            descricao: 'Carne',
            tipo: 'Mercado',
            acao: 'Saída',
            valor: 39.39
        },
        {
            id: 6,
            descricao: 'Pães',
            tipo: 'Mercado',
            acao: 'Saída',
            valor: 15.45
        },
        {
            id: 7,
            descricao: 'Salada',
            tipo: 'Mercado',
            acao: 'Saída',
            valor: 4.44
        },
        {
            id: 8,
            descricao: 'Impostos',
            tipo: 'Impostos',
            acao: 'Saída',
            valor: 67.67
        },
        {
            id: 9,
            descricao: 'Viagem',
            tipo: 'Viagem',
            acao: 'Saída',
            valor: 2323.23
        },
        {
            id: 10,
            descricao: 'Chope',
            tipo: 'Bebida',
            acao: 'Saída',
            valor: 70.70
        }
    ]

    getLancamentos(): LancamentoModel[] {
        return this.lancamentos
    }

    getLancamentoById(id: number): LancamentoModel | undefined {
        return this.lancamentos.find((lancamento) => lancamento.id === id) || undefined
    }
}