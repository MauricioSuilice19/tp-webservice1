import { Component, OnInit } from '@angular/core';
import { MarcaAuto, ModeloAuto, AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos',
  imports: [],
  templateUrl: './autos.html',
  styleUrl: './autos.css',
})
export class Autos implements OnInit {
  marcas: MarcaAuto[] = [];
  modelos: ModeloAuto[] = [];
  marcaSeleccionada = '';
  cargandoMarcas = false;
  cargandoModelos = false;
  error = '';

  constructor(private autosService: AutosService) {}

  ngOnInit(): void {
    this.cargarMarcas();
  }

  cargarMarcas(): void {
    this.cargandoMarcas = true;
    this.error = '';

    this.autosService.obtenerMarcas().subscribe({
      next: (marcas) => {
        this.marcas = marcas;
        this.cargandoMarcas = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar las marcas de autos.';
        this.cargandoMarcas = false;
      },
    });
  }

  verModelos(marca: MarcaAuto): void {
    this.marcaSeleccionada = marca.makeName;
    this.modelos = [];
    this.cargandoModelos = true;

    this.autosService.obtenerModelosPorMarca(marca.makeName).subscribe({
      next: (modelos) => {
        this.modelos = modelos;
        this.cargandoModelos = false;
      },
      error: () => {
        this.cargandoModelos = false;
      },
    });
  }
}
