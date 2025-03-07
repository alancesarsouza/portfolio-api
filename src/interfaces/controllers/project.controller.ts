import { FastifyInstance } from 'fastify';
import {
  paramId,
  bodyCreate,
  bodyUpdate,
} from '../../domain/validation/project/request';
import { ProjectRepository } from '../../infrastructure/repositories/project.repository';

const repository = new ProjectRepository();

export async function projectRoutes(app: FastifyInstance) {
  app.get('/api/v1/projects', async (_request, reply) => {
    const data = await repository.list();

    return reply.status(201).send({ data });
  });

  app.get('/api/v1/projects/:id', async (request, reply) => {
    const { id } = paramId.parse(request.params);
    const data = await repository.show(id);

    return reply.status(201).send({ data });
  });

  app.post('/api/v1/projects', async (request, reply) => {
    const project = bodyCreate.parse(request.body);

    const data = await repository.save(project);

    return reply.status(201).send({ data });
  });

  app.patch('/api/v1/projects/:id', async (request, reply) => {
    const { id } = paramId.parse(request.params);
    const found = await repository.show(id);

    if (!found) {
      return reply.status(404).send({
        message: 'Project not found',
        data: null,
      });
    }

    const payload = bodyUpdate.parse(request.body);

    const data = await repository.change(id, { ...found, ...payload });

    return reply.status(201).send({ data });
  });

  app.delete('/api/v1/projects/:id', async (request, reply) => {
    const { id } = paramId.parse(request.params);
    const data = await repository.destroy(id);

    return reply.status(201).send({ data });
  });
}
