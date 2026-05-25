import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TextoAudioService {
  generarUrlAudio(texto: string, voz: string): string {
    const textoSeguro = encodeURIComponent(texto.trim());
    const vozSegura = encodeURIComponent(voz);
    return `https://api.streamelements.com/kappa/v2/speech?voice=${vozSegura}&text=${textoSeguro}`;
  }
}
