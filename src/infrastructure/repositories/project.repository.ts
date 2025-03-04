import { prisma } from "../database/prisma";
import { ProjectInterface } from "../../domain/interface/project.interface";
import { Prisma, PrismaPromise } from "@prisma/client";

export class ProjectRepository {
  private db: Prisma.ProjectDelegate;

  constructor() {
    this.db = prisma.project;
  }

  async list(): Promise<ProjectInterface[]> {
    return this.db.findMany();
  }

  async show(id: string): Promise<ProjectInterface | null> {
    return this.db.findUnique({ where: { id } });
  }

  async save(data: ProjectInterface): Promise<ProjectInterface> {
    return this.db.create({ data });
  }

  async change(id: string, data: ProjectInterface): Promise<ProjectInterface> {
    return this.db.update({
      where: { id },
      data,
    });
  }

  async destroy(id: string): Promise<ProjectInterface> {
    return this.db.delete({ where: { id } });
  }
}
