import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextoAudioService } from '../../services/texto-audio.service';

@Component({
  selector: 'app-texto-audio',
  imports: [FormsModule],
  templateUrl: './texto-audio.html',
  styleUrl: './texto-audio.css',
})
export class TextoAudio {
  texto = 'Hola, este audio fue generado a partir de un texto.';
  voz = 'Miguel';
  audioUrl = '';
  voces = [
    { valor: 'Miguel', nombre: 'Español - Miguel' },
    { valor: 'Penelope', nombre: 'Español - Penelope' },
    { valor: 'Brian', nombre: 'Inglés - Brian' },
    { valor: 'Amy', nombre: 'Inglés - Amy' },
  ];

  constructor(private textoAudioService: TextoAudioService) {}

  generarAudio(): void {
    if (!this.texto.trim()) {
      this.audioUrl = '';
      return;
    }

    this.audioUrl = this.textoAudioService.generarUrlAudio(this.texto, this.voz);
  }
}
