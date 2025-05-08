import { Request, Response } from "express";
import { EventService } from "../services/event.service";
import { EventInput, EventQuery } from "../models/interface";
import { CoupondService } from "../services/coupond.service";

export class EventController {
  private eventService = new EventService();
  private coupondService = new CoupondService();

  public async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const promotor = req.user;
      const file = req.file;

      if (!promotor?.usersId) {
        res.status(400).json({
          message: "Failed to create event",
          detail: "Promotor ID is missing or invalid.",
        });
        return;
      }

      // Destructure event input dari request body
      const {
        nameEvents,
        categoryEvents,
        imgUrl,
        priceEvents,
        descriptionEvents,
        locationEvents,
        startDateEvents,
        endDateEvents,
        availableSeats,
        coupon, // opsional
      } = req.body;

      // Parsing tanggal (convert to ISO format if necessary)
      const startDate = new Date(startDateEvents); // Pastikan startDateEvents di-parse sebagai objek Date
      const endDate = new Date(endDateEvents); // Pastikan endDateEvents di-parse sebagai objek Date

      // Validasi apakah tanggal valid
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        console.log("=== start Event ===", startDate)
        res.status(400).json({
          message: "Invalid date format",
          detail:
            "Please provide valid start and end dates in the correct format.",
        });
        return;
      }

      // Buat event dengan promotorId dari user login
      const newEvent = await this.eventService.createEvent(
        {
          nameEvents,
          categoryEvents,
          priceEvents,
          imgUrl,
          descriptionEvents,
          locationEvents,
          startDateEvents: startDate.toISOString(),
          endDateEvents: endDate.toISOString(),
          coupon,
          availableSeats: Number(availableSeats),
          promotorId: promotor.usersId,
        },
        file
      );

      let createdCoupond = null;

      // Jika body berisi kupon, buat kupon
      if (coupon && coupon.discount) {
        createdCoupond = await this.coupondService.create({
          usersId: promotor.usersId, // Pass the userId
          discount: coupon.discount, // Pass the discount
        });
      }

      res.status(201).json({
        message: "Event created successfully",
        data: {
          event: newEvent,
          coupon: createdCoupond, // bisa null jika tidak dibuat
        },
      });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(400).json({
        message: "Failed to create event",
        detail: error instanceof Error ? error.message : String(error),
      });
    }
  }

  public async findAllEventByPromotor(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const promotorId = req.user.usersId;

      const query: EventQuery & { promotorId: number } = {
        search: req.query.search as string,
        categoryEvents: req.query.categoryEvents as string,
        locationEvents: req.query.locationEvents as string,
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
        promotorId: promotorId, // Ensure promotorId is explicitly included
      };
      const result = await this.eventService.findAllEventByPromotor(query);
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

  public async findAllEventByUser(req: Request, res: Response): Promise<void> {
    try {
      // Tidak perlu mengambil promotorId dari auth
      const query: EventQuery = {
        search: req.query.search as string,
        categoryEvents: req.query.categoryEvents as string,
        locationEvents: req.query.locationEvents as string,
        page: req.query.page ? parseInt(req.query.page as string) : 1,
        limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
        // Hapus promotorId dari query jika tidak perlu autentikasi
      };
      const result = await this.eventService.findAllEventByUser(query);
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(404).json({
        message: "Failed to fetch events",
        detail: error,
      });
    }
  }

  public async findAllEventByPromotorId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const promotorId = parseInt(req.params.promotorId); // Mengambil promotorId dari path parameter

      // Mengambil semua event berdasarkan promotorId
      const result = await this.eventService.findAllEventByPromotorId(
        promotorId
      );

      if (!result || result.length === 0) {
        res.status(404).json({
          message: "No events found for the specified promoter",
        });
        return;
      }

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch events",
        detail: error.message,
      });
    }
  }

  public async findEventById(req: Request, res: Response): Promise<void> {
    try {
      const eventId = parseInt(req.params.eventId); // Mengambil eventId dari path parameter

      // Validasi format eventId
      if (isNaN(eventId)) {
        res.status(400).json({
          message: "Invalid event ID format",
        });
        return;
      }

      // Cari event berdasarkan eventId yang diberikan dalam URL
      const result = await this.eventService.findAllEventById(eventId);

      // Jika event tidak ditemukan
      if (!result) {
        res.status(404).json({
          message: "Event not found for the specified ID",
        });
        return;
      }

      // Mengembalikan hasil pencarian
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch event",
        detail: error.message,
      });
    }
  }

  public async updateEvent(req: Request, res: Response): Promise<void> {
    try {
      const { usersId } = req.params;
      const data: Partial<EventInput> = req.body;
      const result = await this.eventService.updateEvent(Number(usersId), data);
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

  public async deleteEvent(req: Request, res: Response): Promise<void> {
    try {
      const { eventId } = req.body;
      const result = await this.eventService.deleteEvent(Number(eventId));
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
