import express from "express";
const app = express();
import { Request, Response } from "express";

app.use(express.json());
app.get("/", (req:Request, res:Response) => {
    res.send("Hello, World!");
    console.log("req is missing hihi")
    }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
