import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import trainerRoutes from './routes/trainerRoutes';
import studentRoutes from './routes/studentRoutes';
import courseOutlineRoutes from './routes/courseOutlineRoutes';
import path from 'path';

const envPath = path.resolve(__dirname, '../.env');
console.log('Loading .env from:', envPath);
dotenv.config({ path: envPath });

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/trainers', trainerRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/course-outlines', courseOutlineRoutes);



console.log('MongoDB URI:', process.env.MONGO_URI);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI as string, {})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.log('MongoDB connection error:', error));

export default app;
