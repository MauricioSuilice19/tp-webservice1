import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TraduccionService } from './traduccion.service';

export interface Pelicula {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  genre: string;
}

interface GhibliFilm {
  id: string;
  title: string;
  description: string;
  release_date: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class PeliculasService {
  private readonly url = 'https://ghibliapi.vercel.app/films';
  constructor(private http: HttpClient, private traduccion: TraduccionService) {}

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<GhibliFilm[]>(this.url).pipe(
      map((films) =>
        films.slice(0, 12).map((film) => ({
          id: film.id,
          title: film.title,
          description: film.description,
          year: film.release_date,
          image: film.image,
          genre: 'Animación / Fantasía',
        }))
      ),
      switchMap((peliculas) => {
        const traducciones$ = peliculas.map((p) => this.traduccion.traducir(p.description));
        if (traducciones$.length === 0) return of(peliculas);
        return forkJoin(traducciones$).pipe(
          map((textosTraducidos) => {
            textosTraducidos.forEach((t, i) => (peliculas[i].description = t));
            return peliculas;
          })
        );
      })
    );
  }
}
