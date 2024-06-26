import { SkillModel } from "../skill/skill.model";

export interface TrainingModel {
  id: number;
  name: string;
  location: string;
  skill: SkillModel;
}

export type trainingResponse = TrainingModel[];
