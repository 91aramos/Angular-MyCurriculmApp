import { SectionModel } from '../section/section.model';

export interface ResponsabilityModel {
  id: number;
  text: string;
}

export type responsabilityResponse = ResponsabilityModel[];
