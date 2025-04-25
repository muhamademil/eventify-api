import { Request, Response } from "express";
import { EventService } from "../services/event.service";
import { EventInput, EventQuery } from "../models/interface";

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
        message: "Event created successfully",
        data: newEvent,
      });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(400).json({
        message: "Failed to create event",
        detail: error instanceof Error ? error.message : String(error),
      });
    }
  }

  public async findAll(req: Request, res: Response): Promise<void> {
    try {
      const query: EventQuery = {
        search: req.query.search as string,
        categoryEvents: req.query.categoryEvents as string,
        locationEvents: req.query.locationEvents as string,
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
      };
      const result = await this.eventService.findAll(query);
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(404).json({
        message: "Failed to fetch event",
        detail: error,
      });
    }
  }

  public async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.eventService.findById(Number(id));

      if (!result) {
        res.status(404).json({
          message: "Event not found",
        });
      }

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(404).json({
        message: "Failed to fetch event",
        detail: error,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { usersId } = req.params;
      const data: Partial<EventInput> = req.body;
      const result = await this.eventService.update(Number(usersId), data);
      res.status(200).json({
        message: "Event updated",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to update event",
        detail: error,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.eventService.delete(Number(id));
      res.status(200).json({
        message: "Event deleted",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to delete event",
        detail: error,
      });
    }
  }
}
