import express, { Application } from "express";
import cors from "cors";
import { UserRouter } from "./routers/user.router";

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
    // this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api", new UserRouter().router);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
