import { prisma } from "../prisma/client";
import { UserInput } from "../models/interface";

export class UserService {
  public async create(data: UserInput) {
    return await prisma.user.create({ data });
  }

  public async getAll() {
    return await prisma.user.findMany();
  }
}
