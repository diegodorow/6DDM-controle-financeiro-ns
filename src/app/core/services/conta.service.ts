import { Injectable } from '@angular/core'
import { ContaModel } from '../models/conta.model'

@Injectable({
    providedIn: 'root',
})
export class ContaService {

    private contas: ContaModel[] = [
        {
            id: 1,
            nome: 'Bradesco',
            imagem: '~/app/assets/bradesco.png'
        },
        {
            id: 2,
            nome: 'Alelo',
            imagem: '~/app/assets/alelo.png'
        },
        {
            id: 3,
            nome: 'Banco do Brasil',
            imagem: '~/app/assets/brasil.png'
        },
        {
            id: 4,
            nome: 'Caixa',
            imagem: '~/app/assets/caixa.png'
        },
        {
            id: 5,
            nome: 'Nubank',
            imagem: '~/app/assets/nubank.png'
        }
    ]

    getContas(): ContaModel[] {
        return this.contas
    }

    getContaById(id: number): ContaModel | undefined {
        return this.contas.find((conta) => conta.id === id) || undefined
    }
}