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
        select: {
          id: true,
          createdAt: false,
          updatedAt: false,
          description: true,
          challenges: false,
          technologies: false,
          libraries: false,
          integration: false,
          image: true,
          title: true,
        },
      });
    }

    return cache;
  }

  async show(id: ProjectType['id']): Promise<ProjectDetailInterface | null> {
    return this.db.findUnique({ where: { id } });
  }

  async save(data: ProjectNonCreatedType): Promise<ProjectDetailInterface> {
    cache = [];
    return this.db.create({ data });
  }

  async change(
    id: ProjectType['id'],
    data: ProjectDetailInterface
  ): Promise<ProjectDetailInterface> {
    cache = [];
    return this.db.update({
      where: { id },
      data,
    });
  }

  async destroy(id: ProjectType['id']): Promise<ProjectDetailInterface> {
    return this.db.delete({ where: { id } });
  }
}
