import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prima";
import { z } from "zod";

const paramsSchema = z.object({ id: z.string().uuid() });

const bodySchema = z.object({
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  image: z.optional(z.string()),
  sourceCode: z.optional(z.string()),
});

export async function updateProject(app: FastifyInstance) {
  app.patch("/project/:id", async (request, reply) => {
    const { id } = paramsSchema.parse(request.params);

    const found = await prisma.project.findUnique({ where: { id } });

    if (!found) return reply.status(404).send({ message: "Project not found" });

    const payload = bodySchema.parse(request.body);

    const data = await prisma.project.update({
      where: { id },
      data: { ...found, ...payload },
    });

    return reply.status(200).send({ data });
  });
}
