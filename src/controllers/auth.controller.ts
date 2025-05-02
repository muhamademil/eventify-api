import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(401).json({
        message: "Unauthorized : failed login, check your credentials",
        error: error,
      });
    }
  }

  public async forgotPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      const result = await this.authService.forgotPassword(email);

      res.status(200).json({
        message: "Reset token generated successfully",
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  public async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { resetToken, newPassword } = req.body;
      const result = await this.authService.resetPassword(
        resetToken,
        newPassword
      );

      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        message: "Reset password gagal",
        error: error.message,
      });
    }
  }
}
