import { Request, Response } from "express";
import { TicketService } from "../services/ticket.service";

const ticketService = new TicketService();

export class TicketController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const ticket = await ticketService.create(data);
      return res.status(201).json({
        success: true,
        message: "Ticket created successfully",
        data: ticket,
      });
    } catch (error) {
      console.error("Error creating ticket:", error);
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong",
      });
    }
  }
}
