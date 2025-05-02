import { prisma } from "../prisma/client";
import { EventInput, EventQuery } from "../models/interface";

export class EventService {
  public async create(
    data: EventInput & {
      promotorId: number;
      coupon?: { code: string; discount: number };
    }
  ) {
    return await prisma.$transaction(async (tx) => {
      const event = await tx.event.create({
        data: {
          ...data,
          startDateEvents: new Date(data.startDateEvents),
          endDateEvents: new Date(data.endDateEvents),
        },
      });

      if (data.coupon) {
        await tx.coupond.create({
          data: {
            code: data.coupon.code,
            discount: data.coupon.discount,
            eventId: event.eventId,
          },
        });
      }

      return event;
    });
  }

  public async findAll(query: EventQuery) {
    const {
      search,
      categoryEvents,
      locationEvents,
      page = 1,
      limit = 10,
    } = query;
    const where: any = {};

    if (search) {
      where.name = {
        contains: search,
        mode: "insensitive",
      };
    }

    if (categoryEvents) {
      where.categoryEvents = categoryEvents;
    }

    if (locationEvents) {
      where.locationEvents = locationEvents;
    }

    return prisma.user.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  public async findById(eventId: number) {
    return prisma.event.findUnique({
      where: { eventId },
    });
  }

  public async update(eventId: number, data: Partial<EventInput>) {
    return prisma.event.update({
      where: { eventId },
      data: {
        ...data,
      },
    });
  }

  public async delete(eventId: number) {
    return prisma.event.delete({
      where: { eventId },
    });
  }
}
