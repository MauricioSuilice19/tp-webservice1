import { Component, OnInit } from '@angular/core';
import { Pelicula, PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  imports: [],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas implements OnInit {
  peliculas: Pelicula[] = [];
  cargando = false;
  error = '';

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas(): void {
    this.cargando = true;
    this.error = '';

    this.peliculasService.obtenerPeliculas().subscribe({
      next: (datos) => {
        this.peliculas = datos;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar las películas. Revisá la conexión o intentá nuevamente.';
        this.cargando = false;
      },
    });
  }
}
