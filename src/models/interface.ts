export interface UserInput {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "PROMOTOR";
  referralCode?: string;
  referredBy?: string;
}

export interface UserPayload {
  id: number;
  name: string;
  role: "USER" | "PROMOTOR";
}
