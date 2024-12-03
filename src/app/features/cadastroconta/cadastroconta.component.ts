import { Component } from "@angular/core";
import { ContaModel } from '../../core/models/conta.model'
import {
  FormGroup,
  FormBuilder,
  Validators
}
  from '@angular/forms';

@Component({
  selector: "Cadastro",
  templateUrl: "./cadastroconta.component.html",
  styleUrls: ["./cadastroconta.component.css"]
})
export class CadastroContaComponent {
  formData = {
    nome: ''
  };
  meuFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // **************************************************
    // Abaixo utilizamos o formBuilder para construir
    // vários FormControls que fazem parte do formulário.
    // Cada FormControl valida um input do formulário
    // **************************************************
    this.meuFormGroup = this.formBuilder.group({
      // *********************************************
      // O valor padrão deste formControl será Marcelo
      // e os demais vazio
      // *********************************************
      nome: ['Exemplo', Validators.required]
    });
  }

  onSubmit() {
    if (!this.meuFormGroup.valid) {
      alert(`Nome inválido: ${this.formData.nome}, formulario: ${this.formData.toString()}`);
    } else {
      alert(`Conta Cadastrada com sucesso!`);
    }
  }
}
