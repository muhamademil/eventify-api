import { prisma } from "../prisma/client";
import { TicketInput } from "../models/interface";

export class TicketService {
  public async create(data: TicketInput & { ticketId: number }) {
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
