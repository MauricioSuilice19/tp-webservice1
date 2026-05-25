import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversorService } from '../../services/conversor.service';

@Component({
  selector: 'app-conversor',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css',
})
export class Conversor {
  monedas = ['USD', 'EUR', 'GBP', 'BRL', 'ARS', 'CLP', 'JPY'];
  monto = 1;
  origen = 'USD';
  destino = 'ARS';
  resultado: number | null = null;
  cargando = false;
  error = '';

  constructor(private conversorService: ConversorService) {}

  convertir(): void {
    if (this.monto <= 0) {
      this.error = 'Ingresá un monto mayor a cero.';
      this.resultado = null;
      return;
    }

    if (this.origen === this.destino) {
      this.resultado = this.monto;
      this.error = '';
      return;
    }

    this.cargando = true;
    this.error = '';

    this.conversorService.convertir(this.monto, this.origen, this.destino).subscribe({
      next: (valor) => {
        this.resultado = valor;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo realizar la conversión.';
        this.cargando = false;
      },
    });
  }
}
