import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
import { AuthenticationMiddleware } from "../middlewares/Authentication.middleware";
import { AuthorizationMiddleware } from "../middlewares/Authorization.middleware";

import { userSchemaUpdate, userSchemaRegister } from "../lib/validation/validation.schema";

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
       ValidationMiddleware.validate({ body: userSchemaRegister.body }),
      this.userController.register.bind(this.userController)
    );
    this.router.put(
      "/users/:usersId",
      AuthenticationMiddleware.verifyToken,
      ValidationMiddleware.validate({
        body: userSchemaUpdate.body,
        params: userSchemaUpdate.params,
        partial: true,
      }),
      this.userController.update.bind(this.userController)
    );
  }
}
