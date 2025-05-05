import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthenticationMiddleware } from "../middlewares/Authentication.middleware";
import { AuthorizationMiddleware } from "../middlewares/Authorization.middleware";

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
    this.router.get(
      "/events",
      this.eventController.findAll.bind(this.eventController)
    );
    this.router.get(
      "/events/:id",
      this.eventController.findById.bind(this.eventController)
    );

    this.router.get(
      "/promotor/events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      this.eventController.findAll.bind(this.eventController)
    );

    this.router.get(
      "/promotor/events/:promotorId",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      this.eventController.findById.bind(this.eventController)
    );

    this.router.post(
      "/create-events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      ValidationMiddleware.validate({ body: eventSchema.body }),
      this.eventController.create.bind(this.eventController)
    );

    this.router.post(
      "/delete-events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      ValidationMiddleware.validate({ body: eventSchema.body }),
      this.eventController.delete.bind(this.eventController)
    );

    this.router.post(
      "/update-events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      ValidationMiddleware.validate({ body: eventSchema.body }),
      this.eventController.update.bind(this.eventController)
    );
  }
}
