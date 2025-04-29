import { prisma } from "../prisma/client";
import { TicketInput } from "../models/interface";

export class TicketService {
  public async create(data: TicketInput) {
    if (data.ticketPrice < 0) {
      throw new Error("Ticket price cannot be negative");
    }

    if (data.quantityAvailable < 1) {
      throw new Error("Quantity must be at least 1");
    }

    // cek apakah ada event
    const event = await prisma.event.findUnique({
      where: { eventId: data.eventId },
    });

    if (!event) {
      throw new Error("Event not found");
    }

    return await prisma.ticket.create({
      data: {
        ticketType: data.ticketType,
        ticketPrice: data.ticketPrice,
        quantityAvailable: data.quantityAvailable,
        eventId: data.eventId,
      },
    });
  }
}
