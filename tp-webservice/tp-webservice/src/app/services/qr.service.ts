import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QrService {
  generarUrlQr(texto: string): string {
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(texto.trim())}`;
  }
}
