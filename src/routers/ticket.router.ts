import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller";
import { AuthenticationMiddleware } from "../middlewares/Authentication.middleware";

export class TicketRouter {
  public router: Router;
  private ticketController: TicketController;

  constructor() {
    this.router = Router();
    this.ticketController = new TicketController();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/create-tickets",
      AuthenticationMiddleware.verifyToken,
      this.ticketController.create.bind(this.ticketController)
    );
  }
}
