import {v2 as cloudinary} from "cloudinary"
import { UploadApiResponse } from "cloudinary"
import dotenv from "dotenv"
import { Express } from "express"

dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export class CloudinaryService {
    public async uploadFile(file: Express.Multer.File): Promise<string> {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: 'karyaone/payslips',
                    resource_type: 'raw', // karena PDF
                    public_id: file.originalname
                },
                (error, result: UploadApiResponse | undefined) => {
                    if (error) {
                        console.log("Upload Error: ", error)
                        return reject(error)
                    }
                    resolve(result?.secure_url || '')
                }
            )
            stream.end(file.buffer) // ini penting!
        })
    }

    public async deleteFile(publicId: string) {
        const result = await cloudinary.uploader.destroy(publicId)
        return result
    }

    public async uploadAvatar(file: Express.Multer.File): Promise<string> {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: 'eventify/users/avatars',
                    resource_type: 'image',
                    public_id: file.originalname.split('.')[0], // simpan tanpa ekstensi
                    overwrite: true, // jika ingin update avatar
                    transformation: [
                        { width: 300, height: 300, crop: 'fill', gravity: 'face' } // crop ke wajah
                    ]
                },
                (error, result: UploadApiResponse | undefined) => {
                    if (error) {
                        console.error("Upload Avatar Error: ", error)
                        return reject(error)
                    }
                    resolve(result?.secure_url || '')
                }
            )
            stream.end(file.buffer)
        })
    }
}