"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("./prismaClient"));
async function main() {
    await prismaClient_1.default.product.createMany({
        data: [
            {
                name: "T-Shirt",
                image: "https://www.hatchill.com/cdn/shop/products/sky-blue-oversized-tee-shirt-508317_1000x.png?v=1686324972",
                price: 19.99,
                category: "apparel",
                quantity: 5,
            },
            {
                name: "Mug",
                image: "https://mockups-design-com.b-cdn.net/wp-content/uploads/2025/06/Free_Mug_Mockup_2-1.jpg",
                price: 9.5,
                category: "home",
                quantity: 6,
            },
            {
                name: "Hoodie",
                image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N77918s.jpg?im=Resize,width=750",
                price: 39.99,
                category: "apparel",
                quantity: 10,
            },
            {
                name: "Water Bottle",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWiiAPBiSZcoZvP-bJ2AQdPMKoEotGcGkkTg&s",
                price: 14.99,
                category: "accessories",
                quantity: 0,
            },
            {
                name: "Laptop Sleeve",
                image: "https://m.media-amazon.com/images/I/31vB5igx1XL._SR290,290_.jpg",
                price: 24.99,
                category: "electronics",
                quantity: 0,
            },
            {
                name: "Sneakers",
                image: "https://www.campusshoes.com/cdn/shop/files/LEVEL_LEVEL_WHT-L.GRY_07_831c7a2c-ff1b-4011-9268-b11f984219c6_1024x.webp?v=1757580207",
                price: 59.99,
                category: "apparel",
                quantity: 0,
            },
            {
                name: "Backpack",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnX6ezkVQVg_4nQwe4ChY-u6xvss3dHG17g&s",
                price: 34.99,
                category: "accessories",
                quantity: 4,
            },
            {
                name: "Desk Lamp",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3rVdl30LHTaSOmXrYp_vchbVE43ndCJotw&s",
                price: 18.99,
                category: "home",
                quantity: 6,
            },
            {
                name: "Bluetooth Speaker",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s",
                price: 29.99,
                category: "electronics",
                quantity: 0,
            },
            {
                name: "Headphones",
                image: "https://m.media-amazon.com/images/I/31BwAL20nAL._SR290,290_.jpg",
                price: 49.99,
                category: "electronics",
                quantity: 20,
            },
            {
                name: "Coffee Beans",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tGZ0-X93J6gf9nCpKyChjBqW4Slx8CbFKA&s",
                price: 12.99,
                category: "grocery",
                quantity: 9,
            },
            {
                name: "Gaming Mouse",
                image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg",
                price: 25.99,
                category: "electronics",
                quantity: 0,
            },
            {
                name: "Notebook",
                image: "https://sugarpaper.com/cdn/shop/files/NBK75_LargeSpiralNotebook_Black_Cover.jpg?v=1702681330&width=1946",
                price: 5.99,
                category: "stationery",
                quantity: 0,
            },
            {
                name: "Pen Set",
                image: "https://m.media-amazon.com/images/I/61velkl7lNL._AC_UF894,1000_QL80_.jpg",
                price: 4.99,
                category: "stationery",
                quantity: 0,
            },
            {
                name: "Throw Pillow",
                image: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/348078/1.jpg?4488",
                price: 15.99,
                category: "home",
                quantity: 0,
            },
            {
                name: "Baseball Cap",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Vljoqb8LN10xkOE1L1hfOhnDbd2qgQb-Dg&s",
                price: 11.99,
                category: "apparel",
                quantity: 0,
            },
            {
                name: "Sunglasses",
                image: "https://images-cdn.ubuy.co.in/662854bd124a854eb7277247-wearme-pro-flat-top-polarized-lens.jpg",
                price: 19.99,
                category: "accessories",
                quantity: 0,
            },
            {
                name: "Phone Case",
                image: "https://m.media-amazon.com/images/I/41sD0najrCL._SR290,290_.jpg",
                price: 9.99,
                category: "electronics",
                quantity: 0,
            },
            {
                name: "Keyboard",
                image: "https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1500_.jpg",
                price: 45.99,
                category: "electronics",
                quantity: 0,
            },
            {
                name: "Wall Art",
                image: "https://m.media-amazon.com/images/I/81abvATE5nL._AC_SL1500_.jpg",
                price: 22.5,
                category: "home",
                quantity: 0,
            },
        ],
    });
    console.log("Seeded");
}
main()
    .catch((e) => console.error(e))
    .finally(() => prismaClient_1.default.$disconnect());
