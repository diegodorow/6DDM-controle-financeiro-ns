import { Component } from "@angular/core";

@Component({
  selector: "CadastroLancamento",
  templateUrl: "./cadastrolancamento.component.html",
  styleUrls: ["./cadastrolancamento.component.css"]
})
export class CadastroLancamentoComponent {
  formData = {
    descricao: '',
    tipo: '',
    acao: '',
    valor: '',
  };

  onSubmit() {
    alert(`Lançamento cadastrado com sucesso!`);
  }
}
