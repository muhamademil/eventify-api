import express, { Application } from "express";
import { UserRouter } from "./routers/user.router";
import { AuthRouter } from "./routers/auth.router";
import { EventRouter } from "./routers/event.router";
import { TicketRouter } from "./routers/ticket.router";
import dotenv from "dotenv";

import cors from "cors";

dotenv.config();
console.log('Cloudinary Config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api", new UserRouter().router);
    this.app.use("/api", new AuthRouter().router);
    this.app.use("/api", new EventRouter().router);
    this.app.use("/api", new TicketRouter().router);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
