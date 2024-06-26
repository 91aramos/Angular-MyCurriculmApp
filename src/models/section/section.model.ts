import { responsabilityResponse } from "../responsability/responsability.model";
import { technologyResponse } from "../technology/technology.model";

export interface SectionModel {
  id: number;
  company: string;
  dates: string;
  description: string;
  responsabilities: string;
  technologies: string;
  listResponsabilities: responsabilityResponse;
  listTechnologies: technologyResponse;
}

export type sectionResponse = SectionModel[];
