import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthenticationMiddleware } from "../middlewares/Authentication.middleware";
import { AuthorizationMiddleware } from "../middlewares/Authorization.middleware";
import { uploadEventImage } from "../middlewares/fileUPload.middleware";
import { parseMultipartBody } from "../middlewares/parseMultipartBody.middleware"; 

import { deleteEventSchema, eventSchema } from "../lib/validation/event.schema";

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
      this.eventController.findAllEventByUser.bind(this.eventController)
    );
    this.router.get(
      "/events/:eventId",
      this.eventController.findEventById.bind(this.eventController)
    );

    this.router.get(
      "/promotor/events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      this.eventController.findAllEventByPromotor.bind(this.eventController)
    );

    this.router.get(
      "/promotor/events/:promotorId",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      this.eventController.findAllEventByPromotorId.bind(this.eventController)
    );

    this.router.post(
      "/create-events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      uploadEventImage.single("image"),
      parseMultipartBody,
      ValidationMiddleware.validate({ body: eventSchema.body }),
      this.eventController.createEvent.bind(this.eventController)
    );

    this.router.delete(
      "/delete-events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      ValidationMiddleware.validate({ body: deleteEventSchema.body }),
      this.eventController.deleteEvent.bind(this.eventController)
    );

    this.router.put(
      "/update-events",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("PROMOTOR"),
      uploadEventImage.single("image"),
      ValidationMiddleware.validate({ body: eventSchema.body }),
      this.eventController.updateEvent.bind(this.eventController)
    );
  }
}
