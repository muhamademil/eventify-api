export interface UserInput {
  name: string;
  email: string;
  password: string;
  role: "USER" | "PROMOTOR";
  // referralCode?: string;
  // referralCodeUsed?: string;
}

export interface UserPayload {
  id: number;
  name: string;
  role: "USER" | "PROMOTOR";
}
