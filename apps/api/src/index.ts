import { Hono } from "hono";

const app = new Hono();

app.get("/health", (context) =>
  context.json({
    status: "ok",
    service: "minuta-clara-api"
  })
);

export default {
  port: 3001,
  fetch: app.fetch
};
