import { ConsultaCepService } from "./../services/consulta-cep.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  public cadastrar(form: NgForm): void {
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
      return;
    }
  }

  public consultaCep(event: Event, f: NgForm): void {
    const cep = (event.target as HTMLInputElement).value;
    if (cep.length >= 8) {
      this.consultaCepService
        .getConsultaCep(cep)
        .subscribe((result) => this.populandoEndereco(result, f));
    }
  }
  private populandoEndereco(result: any, f: NgForm): void {
    f.form.patchValue({
      endereco: result.logradouro,
      complemento: result.complemento,
      bairro: result.localidade,
      estado: result.uf,
    });
  }
}
