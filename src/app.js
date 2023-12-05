import Fastify from "fastify";
import cors from "@fastify/cors";
import Routes from "./routes/index.js";
import "dotenv/config";

const { APP_PORT } = process.env;

const app = Fastify({ logger: true, bodyLimit: 100 * 1024 * 1024 * 1024 });

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  credentials: true,
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Authorization",
  ],
});

app.register(Routes);

const start = async () => {
  try {
    await app.listen({ port: 8080, host: "0.0.0.0" });
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();
