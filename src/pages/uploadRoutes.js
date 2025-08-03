import express from 'express';
import multer from 'multer';
import { handleUpload } from '../controllers/uploadController.js';

const router = express.Router();

// File storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // <- Make sure /uploads exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('file'), handleUpload);

export default router;
