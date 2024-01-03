import express from "express";
import connectDatabase from "./config/database.js";
import authRoutes from "./routes/auth.js";
import mobileRoutes from "./routes/mobiles.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());


connectDatabase();


app.use("/api/auth", authRoutes);
app.use("/api/mobile", mobileRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
