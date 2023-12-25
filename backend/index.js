// app.js (or your route file)
import express from 'express';
import MobileModel from './models/mobileSchema.js'; // Correct import
import mongoose from 'mongoose';
import connectDatabase from './config/database.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

// importing custom routes
import mobileRoutes from "./routes/mobiles.js"

// Add body-parser middleware to parse JSON data
app.use(express.json());
app.use(cors());
app.use('/api/mobile',mobileRoutes)

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
});
