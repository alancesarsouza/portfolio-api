import { prisma } from '../database/prisma';
import {
  ProjectListInterface,
  ProjectDetailInterface,
  ProjectNonCreatedType,
  ProjectType,
} from '../../domain/interface/project.interface';
import { Prisma } from '@prisma/client';

let cache: ProjectListInterface[] = [];

export class ProjectRepository {
  private db: Prisma.ProjectDelegate;

  constructor() {
    this.db = prisma.project;
  }

  async list(): Promise<ProjectListInterface[]> {
    if (!cache.length) {
      cache = await this.db.findMany({
        where: { published: true },
        select: {
          id: true,
          description: true,
          image: true,
          title: true,
          createdAt: false,
          updatedAt: false,
          published: false,
          challenges: false,
          technologies: false,
          libraries: false,
          integration: false,
          skills: false,
        },
      });
    }

    return cache;
  }

  async show(id: ProjectType['id']): Promise<ProjectDetailInterface | null> {
    return this.db.findUnique({
      where: { id },
      include: {
        skills: {
          select: { label: true, description: true, importance: true },
          orderBy: { importance: 'desc' },
        },
      },
    });
  }

  async save(data: ProjectNonCreatedType): Promise<ProjectDetailInterface> {
    cache = [];
    const { skills, ...project } = data;

    return this.db.create({
      data: {
        ...project,
        skills: { create: skills },
      },
    });
  }

  async change(
    id: ProjectType['id'],
    data: ProjectDetailInterface
  ): Promise<ProjectDetailInterface> {
    cache = [];

    const { skills, ...project } = data;

    return this.db.update({
      where: { id },
      data: {
        ...project,
        skills: {
          deleteMany: { projectId: id },
          create: skills?.filter((skill) => ({
            label: skill.label,
            description: skill.description,
          })),
        },
      },
    });
  }

  async destroy(id: ProjectType['id']) {
    return this.db.delete({ where: { id } });
  }
}
