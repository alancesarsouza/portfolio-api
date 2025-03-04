import fastify from "fastify";
import { createProject } from "./routes/project/create";

const app = fastify();

app.get("/", () => {
  return "Hello World";
});

app
  .listen({
    port: 3001,
  })
  .then(() => {
    console.log("Server running");
  });
