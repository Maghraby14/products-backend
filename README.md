# 🛒 Product Store – Backend API

This is the **backend** for the Product Store application built with **Node.js**, **Express**, and **Prisma ORM**.  
It provides a REST API for managing products with inventory and category filtering.

---

## 🚀 Tech Stack

- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite (development) / PostgreSQL (production)

---

## 📁 Project Structure
src/
├── server.ts
├── routes/
│ └── products.ts
├── prisma/
│ ├── schema.prisma
│ ├── seed.ts


- `routes/products.ts` contains all API endpoints.
- `prisma/schema.prisma` defines the Product model: `id`, `name`, `image`, `price`, `category`, `quantity`.
- `seed.ts` seeds the database with sample products.

---

## ⚙️ How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Maghraby14/product-backend.git
cd product-api
```
2. install dependencies
``` bash
npm install
```
3. create .env file
``` bash
DATABASE_URL="file:./dev.db"
PORT=3000
```
4. run prisma migrations
  ```bash
npx prisma migrate dev
```

5. seed the database
```bash
npx prisma db seed
```
6. start the development server
```bash
npm run dev
```
## 📦 API Endpoints

### 1. **GET /products**

Retrieve all products. Supports optional filtering by category.
### 2. **GET /products/:id** 
Retrive a product with specific id
### 3. **Get /products?category=appareal**
Retrive product with category appareal
### 4. **Post /products
Add a new product


