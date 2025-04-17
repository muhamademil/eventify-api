import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserInput } from "../models/interface";
import { prisma } from "../prisma/client";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const data: UserInput = req.body;
      const result = await this.userService.create(data);
      res.status(201).json({
        message: "Employee created",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.userService.getAll();
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error,
      });
    }
  }
}
