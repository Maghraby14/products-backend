import { Router, Request, Response } from "express";
import prisma from "../prismaClient";

const router = Router();

// GET /products?category=apparel
router.get("/", async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const where: any = {};
    if (category && typeof category === "string") {
      where.category = category;
    }
    const products = await prisma.product.findMany({ where });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /products/:id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid id" });
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /products
// body: { name: string, image: string, price: number, category?: string }
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, image, price, category } = req.body;
    if (!name || !image || price === undefined) {
      return res
        .status(400)
        .json({ error: "name, image and price are required" });
    }
    const priceNum = Number(price);
    if (Number.isNaN(priceNum))
      return res.status(400).json({ error: "price must be a number" });

    const product = await prisma.product.create({
      data: {
        name,
        image,
        price: priceNum,
        category,
        
      },
    });
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
