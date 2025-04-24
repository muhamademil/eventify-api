import { z as zod } from "zod";

export const eventSchema = {
  body: zod.object({
    nameEvents: zod.string().min(1),
    categoryEvents: zod.enum(["MUSIC", "SPORTS", "FOOD", "BEAUTY"]),
    priceEvents: zod.string().min(1),
    descriptionEvents: zod.string().min(1),
    locationEvents: zod.enum(["JAKARTA", "BANDUNG", "SURABAYA", "BALI"]),
    startDateEvents: zod.string().datetime(),
    endDateEvents: zod.string().datetime(),
    availableSeats: zod.number().int().positive(),
  }),
};
