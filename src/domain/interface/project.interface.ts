export type ProjectType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  image: string;
  title: string;

  challenges: string[];
  description: string[];
  integration: string[];
  libraries: string[];
  technologies: string[];
};

export type ProjectNonCreatedType = Omit<
  ProjectType,
  'id' | 'createdAt' | 'updatedAt'
> &
  Partial<Pick<ProjectType, 'id' | 'createdAt' | 'updatedAt'>>;

export interface ProjectListInterface
  extends Pick<ProjectType, 'description' | 'id' | 'image' | 'title'> {}

export interface ProjectDetailInterface extends ProjectType {}
