import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface MarcaAuto {
  makeId: number;
  makeName: string;
}

export interface ModeloAuto {
  modelId: number;
  modelName: string;
}

interface MakesResponse {
  Results: Array<{ MakeId: number; MakeName: string }>;
}

interface ModelsResponse {
  Results: Array<{ Model_ID: number; Model_Name: string }>;
}

@Injectable({ providedIn: 'root' })
export class AutosService {
  private readonly baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles';

  constructor(private http: HttpClient) {}

  obtenerMarcas(): Observable<MarcaAuto[]> {
    const url = `${this.baseUrl}/GetMakesForVehicleType/car?format=json`;
    return this.http.get<MakesResponse>(url).pipe(
      map((resp) =>
        resp.Results.slice(0, 24).map((marca) => ({
          makeId: marca.MakeId,
          makeName: marca.MakeName,
        }))
      )
    );
  }

  obtenerModelosPorMarca(marca: string): Observable<ModeloAuto[]> {
    const url = `${this.baseUrl}/GetModelsForMake/${encodeURIComponent(marca)}?format=json`;
    return this.http.get<ModelsResponse>(url).pipe(
      map((resp) =>
        resp.Results.slice(0, 20).map((modelo) => ({
          modelId: modelo.Model_ID,
          modelName: modelo.Model_Name,
        }))
      )
    );
  }
}
