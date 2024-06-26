import { Component, OnInit } from '@angular/core';
import { SectionService } from './../../services/section.service';
import { sectionResponse } from '../../models/section/section.model';
import { responsabilityResponse } from '../../models/responsability/responsability.model';
import { technologyResponse } from '../../models/technology/technology.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent{
  cvSections: sectionResponse = [];

  constructor(private sectionService: SectionService) {
    this.loadCvSections(); // Assuming this is also async and needs to be awaited
  }


  loadCvSections(): void {
    this.sectionService.getCvSections().subscribe({
      next: (sections) => this.cvSections = sections,
      error: (err) => {
        console.error('Error loading CV sections:', err);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario.
      }
    });
  }
}
