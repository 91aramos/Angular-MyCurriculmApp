import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sectionResponse } from '../models/section/section.model';
import { tap } from 'rxjs/operators';
import { technologyResponse } from '../models/technology/technology.model';
import { responsabilityResponse } from '../models/responsability/responsability.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private apiUrl = 'http://localhost:8080'; // URL de tu API

  constructor(private http: HttpClient) { }

  getCvSections(): Observable<sectionResponse> {
    return this.http.get<sectionResponse>(`${this.apiUrl}/sections`).pipe(
      tap(response => console.log('API Response:', response)) // Imprime la respuesta de la API
    );
  }
}
