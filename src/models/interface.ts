export interface UserInput {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "PROMOTOR";
  referralCode?: string;
  referredBy?: string;
}

export interface EventInput {
  nameEvents: string;
  categoryEvents: "MUSIC" | "SPORTS" | "FOOD" | "BEAUTY";
  priceEvents: string;
  descriptionEvents: string;
  locationEvents: "JAKARTA" | "BANDUNG" | "SURABAYA" | "BALI";
  startDateEvents: string;
  endDateEvents: string;
  availableSeats: number;
}

export interface CoupondInput {
  code: string;
  discount: number;
  usersId: number;
}

export interface TicketInput {
  ticketType: "PAID" | "UNPAID";
  ticketPrice: number;
  quantityAvailable: number;
  eventId: number;
}

export interface EventQuery {
  search?: string;
  categoryEvents?: string;
  locationEvents?: string;
  page?: number;
  limit?: number;
  promotorId:number
}

export interface UserPayload {
  usersId: number;
  name: string;
  role: "USER" | "PROMOTOR";
}
