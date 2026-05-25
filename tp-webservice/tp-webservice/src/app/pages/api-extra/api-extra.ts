import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QrService } from '../../services/qr.service';

@Component({
  selector: 'app-api-extra',
  imports: [FormsModule],
  templateUrl: './api-extra.html',
  styleUrl: './api-extra.css',
})
export class ApiExtra {
  texto = 'https://fi.unju.edu.ar';
  qrUrl = '';

  constructor(private qrService: QrService) {}

  generarQr(): void {
    if (!this.texto.trim()) {
      this.qrUrl = '';
      return;
    }

    this.qrUrl = this.qrService.generarUrlQr(this.texto);
  }
}
