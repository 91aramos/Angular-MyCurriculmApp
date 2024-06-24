export interface SectionModel {
  id: number;
  company: string;
  dates: string;
  description: string;
  responsabilities: string;
  technologies: string;
}

export type sectionResponse = SectionModel[];
