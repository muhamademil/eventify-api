import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthenticationMiddleware } from "../middlewares/Authentication.middleware";

import { eventSchema } from "../lib/validation/event.schema";

export class EventRouter {
  public router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();
    this.eventController = new EventController();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/create/events",
      AuthenticationMiddleware.verifyToken,
      ValidationMiddleware.validate({ body: eventSchema.body }),
      this.eventController.create.bind(this.eventController)
    );
  }
}
