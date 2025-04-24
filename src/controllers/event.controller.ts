import { Request, Response } from "express";
import { EventService } from "../services/event.service";

export class EventController {
  private eventService = new EventService();

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const promotor = req.user;
      console.log("promotor:", promotor);

      // Pastikan promotorId ada
      if (!promotor?.usersId) {
        res.status(400).json({
          message: "Failed to create event",
          detail: "Promotor ID is missing or invalid.",
        });
        return;
      }

      const data = req.body;

      const newEvent = await this.eventService.create({
        ...data,
        promotorId: promotor.usersId,
      });
      res.status(201).json({
        message: "Event created successfully 😎",
        data: newEvent,
      });
    } catch (error) {
      console.error("🙏 Error creating event:", error);
      res.status(400).json({
        message: "Failed to create event",
        detail: error instanceof Error ? error.message : String(error),
      });
    }
  }
}
