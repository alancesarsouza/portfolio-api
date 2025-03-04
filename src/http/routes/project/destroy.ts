import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prima";
import { z } from "zod";

const paramsSchema = z.object({ id: z.string().uuid() });

export async function destroyProject(app: FastifyInstance) {
  app.delete("/project/:id", async (request, reply) => {
    const { id } = paramsSchema.parse(request.params);

    const found = await prisma.project.findUnique({ where: { id } });

    if (!found) return reply.status(404).send({ message: "Project not found" });

    await prisma.project.delete({ where: { id } });

    return reply.status(200).send({ message: "Project deleted", data: found });
  });
}
