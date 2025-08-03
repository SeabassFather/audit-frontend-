import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  path: String,
  size: Number,
  mimeType: String,
  uploadDate: Date,
});

export default mongoose.model('Upload', uploadSchema);
