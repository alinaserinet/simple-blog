import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/blog';

export const connectMongoDB = async () => {
  if (mongoose.connections[0].readyState) return; // Already connected
  await mongoose.connect(MONGO_URL, {});
};