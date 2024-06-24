import { SectionService } from './../../services/section.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-section-main',
  standalone: true,
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css'] // Corregido a 'styleUrls'
})
export class SectionMainComponent {
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
