import { prisma } from "../prisma/client";
import { EventInput, EventQuery } from "../models/interface";

export class EventService {
  public async createEvent(
    data: EventInput & {
      promotorId: number;
      coupon?: { code: string; discount: number };
    },
    file?: Express.Multer.File
  ) {
    return await prisma.$transaction(async (tx) => {
      let imageUrl = data.imgUrl || "";
      if (file) {
        if (!file.path) {
          throw new Error("File uploaded but Cloudinary URL is missing.");
        }
        // Pastikan file.path mengandung URL Cloudinary yang valid
        imageUrl = file.path;
      }

      // Membuat event baru di database
      const event = await tx.event.create({
        data: {
          ...data,
          imgUrl: imageUrl,
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

  public async findAllEventByUser(query: EventQuery) {
    const {
      search,
      categoryEvents,
      locationEvents,
      page = 1,
      limit = 10,
      promotorId, // Bisa tetap ada di parameter, tetapi tidak wajib
    } = query;

    const where: any = {};

    if (promotorId) {
      where.promotorId = promotorId; // Filter event hanya milik promotor yang diberikan, jika ada
    }

    if (search) {
      where.nameEvents = {
        contains: search,
        mode: "insensitive", // Pencarian tanpa memperhatikan huruf besar/kecil
      };
    }

    if (categoryEvents) {
      where.categoryEvents = categoryEvents;
    }

    if (locationEvents) {
      where.locationEvents = locationEvents;
    }

    // Menjalankan query untuk mengambil events
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

  public async findAllEventByPromotor(
    query: EventQuery & { promotorId: number }
  ) {
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

  public async findAllEventByPromotorId(promotorId: number) {
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

  public async findAllEventById(eventId: number) {
    return prisma.event.findUnique({
      where: { eventId },
    });
  }

  public async updateEvent(
    eventId: number,
    data: Partial<EventInput>,
    file?: Express.Multer.File
  ) {
    if (file?.path) {
      (data as any).imageUrl = file.path;
    }
    return prisma.event.update({
      where: { eventId },
      data: {
        ...data,
      },
    });
  }

  public async deleteEvent(eventId: number) {
    return prisma.event.delete({
      where: { eventId },
    });
  }
}
