import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prima";
import { z } from "zod";

const paramsSchema = z.object({ id: z.string().uuid() });

export async function showProject(app: FastifyInstance) {
  app.get("/project/:id", async (request, reply) => {
    const { id } = paramsSchema.parse(request.params);

    const data = await prisma.project.findUnique({
      where: { id },
    });

    return reply.status(200).send({ data });
  });
}
