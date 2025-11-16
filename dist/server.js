"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_1 = __importDefault(require("./routes/products"));
const prismaClient_1 = __importDefault(require("./prismaClient"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/products", products_1.default);
app.get("/", (req, res) => res.json({ ok: true, message: "Product API" }));
// start
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    // optional: test DB connection
    try {
        await prismaClient_1.default.$connect();
        console.log("Connected to database");
    }
    catch (err) {
        console.error("Failed to connect to DB", err);
    }
});
