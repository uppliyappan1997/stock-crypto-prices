import express from 'express';
import { getData } from './controllers/dataController';
import connectDB from './config/db';

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/api/data', getData);

export default app;
