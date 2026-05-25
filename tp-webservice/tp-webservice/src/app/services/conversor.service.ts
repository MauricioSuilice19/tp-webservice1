import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface ConversorResponse {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

@Injectable({ providedIn: 'root' })
export class ConversorService {
  constructor(private http: HttpClient) {}

  convertir(amount: number, from: string, to: string): Observable<number> {
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
    return this.http.get<ConversorResponse>(url).pipe(map((resp) => resp.rates[to]));
  }
}
