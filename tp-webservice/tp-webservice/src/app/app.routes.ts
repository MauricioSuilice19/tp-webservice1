import { Routes } from '@angular/router';
import { ApiExtra } from './pages/api-extra/api-extra';
import { Autos } from './pages/autos/autos';
import { Conversor } from './pages/conversor/conversor';
import { Peliculas } from './pages/peliculas/peliculas';
import { TextoAudio } from './pages/texto-audio/texto-audio';



export const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full'},
  { path: 'peliculas', component: Peliculas },
  { path: 'autos', component: Autos },
  { path: 'conversor', component: Conversor },
  { path: 'texto-audio', component: TextoAudio },
  { path: 'api-extra', component: ApiExtra },
  { path: '**', redirectTo: 'peliculas' }
];
