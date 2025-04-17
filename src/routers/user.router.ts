import { Router } from "express";
import { UserController } from "../controllers/user.controller";

import { userSchema } from "../lib/validation/validation.schema";

export class UserRouter {
  public router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/users",
      this.userController.create.bind(this.userController)
    );
    this.router.get(
      "/users/getAll",
      this.userController.getAll.bind(this.userController)
    );
  }
}
