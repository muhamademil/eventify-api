import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserInput } from "../models/interface";

export class UserController {
  private userService = new UserService();

  public register = async (req: Request, res: Response): Promise<void> => {
    try {
      const data: UserInput = req.body;
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

  // Tambahan jika dibutuhkan
  // public login = async () => {...}
  // public getAll = async () => {...}
}
