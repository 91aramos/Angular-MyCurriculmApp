import { SectionModel } from '../section/section.model';

export interface TechnologyModel {
  id: number;
  text: string;
}

export type technologyResponse = TechnologyModel[];
