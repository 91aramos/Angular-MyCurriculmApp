import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sectionResponse } from '../models/section/section.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private apiUrl = 'http://localhost:8080/sections'; // URL de tu API

  constructor(private http: HttpClient) { }

  getCvSections(): Observable<any> {
    return this.http.get('http://localhost:8080/sections').pipe(
      tap(response => console.log('API Response:', response)) // Imprime la respuesta de la API
    );
  }
}
