import fastify from "fastify";
import projectRoutes from "./routes/project";

const app = fastify();

// app.register(require("@fastify/cors"), {
//   origin: true,
// });

app.register(projectRoutes);

app
  .listen({
    host: "0.0.0.0",
    port: 3001,
  })
  .then(() => {
    console.log("Server running");
  });
