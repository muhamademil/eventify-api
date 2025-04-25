export interface UserInput {
  name: string;
  email: string;
  password: string;
  role: "USER" | "PROMOTOR";
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

export interface TicketInput {
  title: string;
  ticketType: string;
  ticketPrice: number;
}

export interface EventQuery {
  search?: string;
  categoryEvents?: string;
  locationEvents?: string;
  page?: number;
  limit?: number;
}

export interface UserPayload {
  usersId: number;
  name: string;
  role: "USER" | "PROMOTOR";
}
