import express from "express";
const app = express();
import { Request, Response, NextFunction } from "express";

export const printname = (req: Request, res: Response) => {
    res.send("Name printed successfully!");
};