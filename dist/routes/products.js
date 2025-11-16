"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prismaClient_1 = __importDefault(require("../prismaClient"));
const router = (0, express_1.Router)();
// GET /products?category=apparel
router.get("/", async (req, res) => {
    try {
        const { category } = req.query;
        const where = {};
        if (category && typeof category === "string") {
            where.category = category;
        }
        const products = await prismaClient_1.default.product.findMany({ where });
        res.json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
// GET /products/:id
router.get("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id))
            return res.status(400).json({ error: "Invalid id" });
        const product = await prismaClient_1.default.product.findUnique({ where: { id } });
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        res.json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
// POST /products
// body: { name: string, image: string, price: number, category?: string }
router.post("/", async (req, res) => {
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
        const product = await prismaClient_1.default.product.create({
            data: {
                name,
                image,
                price: priceNum,
                category,
            },
        });
        res.status(201).json(product);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.default = router;
