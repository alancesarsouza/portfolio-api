import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prima";

export async function listProject(app: FastifyInstance) {
  app.get("/project", async (request, reply) => {
    const data = await prisma.project.findMany();

    return reply.status(200).send({ data });
  });
}
