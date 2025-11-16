import express from "express";
import cors from "cors";
import productsRouter from "./routes/products";
import prisma from "./prismaClient";
import {Request,Response } from 'express';
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.get("/", (req:Request, res:Response) => res.json({ ok: true, message: "Product API" }));

// start
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  // optional: test DB connection
  try {
    await prisma.$connect();
    console.log("Connected to database");
  } catch (err) {
    console.error("Failed to connect to DB", err);
  }
});
