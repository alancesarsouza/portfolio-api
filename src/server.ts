import fastify from "fastify";
import { projectRoutes } from "./interfaces/controllers/project.controller";

const app = fastify();
const port = Number(process.env.PORT ?? 3001);

app.register(projectRoutes);

app.listen({ host: "0.0.0.0", port }).then(() => {
  console.log("Server running on port", port);
});
