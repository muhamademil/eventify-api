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

      // Validasi input
      if (!email || !password) {
        res.status(400).json({
          message: "Email and password are required",
        });
        return;
      }

      const result = await this.authService.login(email, password);

      // Jika login gagal
      if (result === "Invalid credentials") {
        res.status(401).json({
          message: "Unauthorized: Invalid credentials",
        });
        return;
      }

      // Jika login sukses
      res.status(200).json({
        data: result, // Token atau data user bisa dikirim di sini
      });
    } catch (error) {
      console.error("Login Error: ", error);

      // Jangan kirimkan error stack secara langsung
      res.status(500).json({
        message: "Internal Server Error",
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
