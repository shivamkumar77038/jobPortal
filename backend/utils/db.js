import mongoose from 'mongoose';

let isConnected = false;  // Flag to track the database connection

const connectDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;  // Set the connection flag to true once connected
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);  // Exit the process if connection fails
  }
};

export default connectDB;
