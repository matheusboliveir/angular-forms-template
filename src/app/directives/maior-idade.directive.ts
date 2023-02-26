import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[maiorIdadeValidator]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: MaiorIdadeDirective, multi: true },
  ],
})
export class MaiorIdadeDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const anoNascMais18 = new Date(control.value).getFullYear() + 18;
    const anoAtual = new Date().getFullYear();
    return anoNascMais18 <= anoAtual ? null : { maiorIdadeValidator: true };
  }
}
