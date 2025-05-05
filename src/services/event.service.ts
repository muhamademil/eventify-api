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

  public async findAll(query: EventQuery & {promotorId : number}) {
    const {
      search,
      categoryEvents,
      locationEvents,
      page = 1,
      limit = 10,
      promotorId,
    } = query;

    const where: any = {
      promotorId, // Filter event hanya milik promotor yang sedang login
    };

    if (search) {
      where.nameEvents = {
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

    return prisma.event.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        promotor: {
          select: {
            usersId: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  public async findById(promotorId: number) {
    return prisma.event.findMany({
      where: {
        promotorId, // Filter berdasarkan promotorId
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        promotor: {
          select: {
            usersId: true,
            name: true,
            email: true,
          },
        },
      },
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
