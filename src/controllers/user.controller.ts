import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserInput } from "../models/interface";
import { prisma } from "../prisma/client";

export class UserController {
  private userService = new UserService();

  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const data: UserInput = req.body;

      const checkUser = await prisma.user.findUnique({
        where: { email: data.email },
      });

      if (checkUser) {
        throw new Error("User already registered");
      }

      // Validasi role sebelum mengirim ke service
      if (data.role && !["USER", "PROMOTOR"].includes(data.role)) {
        throw new Error("Invalid role");
      }

      const user = await this.userService.create(data);

      res.status(201).json({
        message: "User registered successfully",
        data: user,
      });
    } catch (error: any) {
      res.status(400).json({
        message: "Registration failed",
        error: error.message,
      });
    }
  };

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { usersId } = req.params;
      const data: Partial<UserInput> = req.body;
      const result = await this.userService.update(Number(usersId), data);
      res.status(200).json({
        message: "User updated",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to update user",
        detail: error,
      });
    }
  }
}
