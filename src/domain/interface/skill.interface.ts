export type SkillType<T extends { id: unknown }> = {
  id?: number;

  projectId?: T['id'];
  project?: T;

  importance: number;

  label: string[];
  description: string[];
};
