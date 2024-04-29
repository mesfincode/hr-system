import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
interface MulterRequest extends Request {
    file: any;
}
// Configure multer storage
const storage = multer.diskStorage({
  destination: './public/uploads', // Define the destination directory for storing the uploaded images
  filename: (req:any, file:any, cb:any) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

const upload = multer({ storage });

// API route handler
const uploadHandler = (req: MulterRequest, res: NextApiResponse) => {
  // Access the uploaded file details from req.file
  const { filename, path: filePath } = req.file;

  // You can perform additional operations with the file path or filename, such as storing it in a database or returning it in the API response

  // Return a response
  res.status(200).json({ filename, filePath });
};

export default upload.single('image'); // Specify the field name for the uploaded image
export { uploadHandler };