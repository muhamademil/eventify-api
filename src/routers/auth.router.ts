import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthenticationMiddleware } from "../middlewares/Authentication.middleware";

export class AuthRouter {
  public router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/auth/login",
      this.authController.login.bind(this.authController)
    );

    this.router.get(
      "/auth/profile",
      AuthenticationMiddleware.verifyToken,
      this.authController.getProfile.bind(this.authController)
    );

    this.router.post(
      "/auth/forgot-password",
      this.authController.forgotPassword.bind(this.authController)
    );

    this.router.post(
      "/auth/reset-password",
      this.authController.resetPassword.bind(this.authController)
    );
  }
}
