import { FastifyInstance } from "fastify";
import { addProject } from "./add";
import { destroyProject } from "./destroy";
import { listProject } from "./list";
import { showProject } from "./show";
import { updateProject } from "./update";

export default (app: FastifyInstance) => {
  addProject(app);
  destroyProject(app);
  listProject(app);
  showProject(app);
  updateProject(app);
};
