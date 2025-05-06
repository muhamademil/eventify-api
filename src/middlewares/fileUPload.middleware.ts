import multer from "multer";
import {
  eventStorage, // untuk event
} from "../lib/cloudinary.config";

export const uploadEventImage = multer({ storage: eventStorage });
