import Upload from '../models/Upload.js';

export const handleUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const newUpload = new Upload({
      filename: req.file.filename,
      originalName: req.file.originalname,
      path: req.file.path,
      size: req.file.size,
      mimeType: req.file.mimetype,
      uploadDate: new Date(),
    });

    await newUpload.save();

    res.status(200).json({ message: 'File uploaded successfully!', file: newUpload });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Server error during upload' });
  }
};
