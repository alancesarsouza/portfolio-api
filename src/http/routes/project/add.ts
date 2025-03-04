import { z } from "zod";
import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prima";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  sourceCode: z.string(),
});

export async function addProject(app: FastifyInstance) {
  app.post("/project", async (request, reply) => {
    const project = projectSchema.parse(request.body);

    const data = await prisma.project.create({ data: project });

    return reply.status(201).send({ data });
  });
}
