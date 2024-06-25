import { Component } from '@angular/core';
import { SectionService } from './../../services/section.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  cvSections: any[] = [];
  
  constructor(private sectionService: SectionService) {
    this.loadCvSections();
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
