import express from "express";
const app = express();
// import { Request, Response } from "express";

import userRouter from './routes/userRoutes';
app.use(express.json());

app.use('/me', userRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});