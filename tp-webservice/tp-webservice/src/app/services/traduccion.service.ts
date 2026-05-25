import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TraduccionService {
  private readonly url = 'https://libretranslate.de/translate';

  constructor(private http: HttpClient) {}

  traducir(texto: string, source = 'en', target = 'es'): Observable<string> {
    if (!texto) return of('');
    const body = { q: texto, source, target, format: 'text' };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.url, body, { headers }).pipe(map((res) => res.translatedText || res.translated || ''));
  }
}
