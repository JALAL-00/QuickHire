import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';


dotenv.config();


connectDB();

const app: Application = express();


app.use(cors());
app.use(express.json()); 


app.get('/', (req: Request, res: Response) => {
  res.send('QuickHire API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});