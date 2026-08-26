# Unimart Fashion - E-Commerce Platform

A full-stack fashion e-commerce application built with Next.js 16 (App Router), featuring a complete REST API backend with JWT authentication, SQLite database, and a responsive Bootstrap 5 frontend.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| Language | TypeScript 5 |
| UI | React 19, Bootstrap 5, SASS |
| State | Zustand |
| Database | SQLite (better-sqlite3) |
| ORM | Drizzle ORM |
| Auth | JWT (jose), bcryptjs |
| Validation | Zod |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Seed the Database

```bash
pnpm db:seed
```

This creates the SQLite database at `data/unimart.db` with:
- 3 demo users
- 10 fashion categories
- 24 fashion products
- Sample reviews, cart items, and an order

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

## Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@unimart.com | admin123 |
| Customer | jane@example.com | user123 |
| Customer | john@example.com | user123 |

## API Endpoints

Base URL: `http://localhost:3000/api`

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login and get JWT token | No |
| GET | `/api/auth/me` | Get current user profile | Yes |

### Products

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/products` | List products (search, filter, sort, paginate) | No |
| GET | `/api/products/:id` | Get product details with reviews | No |

**Query Parameters for `/api/products`:**

| Param | Type | Description |
|-------|------|-------------|
| search | string | Search by product title |
| category | string | Filter by category slug |
| min_price | number | Minimum price |
| max_price | number | Maximum price |
| brand | string | Filter by brand name |
| in_stock | boolean | Only in-stock products |
| featured | boolean | Only featured products |
| sort_by | string | Sort field: price, title, rating, createdAt |
| sort_order | string | asc or desc |
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 12, max: 100) |

### Categories

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/categories` | List all categories with product counts | No |

### Cart

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/cart` | Get cart items with totals | Yes |
| POST | `/api/cart` | Add item to cart | Yes |
| PUT | `/api/cart` | Update item quantity | Yes |
| DELETE | `/api/cart` | Remove item from cart | Yes |

### Wishlist

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/wishlist` | Get wishlist items | Yes |
| POST | `/api/wishlist` | Add to wishlist | Yes |
| DELETE | `/api/wishlist` | Remove from wishlist | Yes |

### Orders

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/orders` | List user orders (paginated) | Yes |
| POST | `/api/orders` | Create order from cart | Yes |
| GET | `/api/orders/:id` | Get order details | Yes |

### Reviews

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/reviews?product_id=1` | Get reviews for a product | No |
| POST | `/api/reviews` | Submit a product review | Yes |

### Authentication

Protected endpoints require a Bearer token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### API Response Format

All endpoints return consistent JSON responses:

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 12,
      "total": 24,
      "totalPages": 2,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error message",
  "details": [ ... ]
}
```

## Project Structure

```
├── app/
│   ├── api/                    # REST API routes
│   │   ├── auth/               # Register, Login, Me
│   │   ├── products/           # Product listing and details
│   │   ├── categories/         # Category listing
│   │   ├── cart/               # Cart management
│   │   ├── wishlist/           # Wishlist management
│   │   ├── orders/             # Order creation and history
│   │   └── reviews/            # Product reviews
│   ├── (shop)/                 # Shop pages with filters
│   ├── (product-single)/       # Product detail pages
│   ├── (store)/                # Cart and checkout flow
│   ├── (other-pages)/          # About, Contact, FAQ, Blog
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage (Fashion)
├── lib/
│   ├── db/
│   │   ├── schema.ts           # Drizzle ORM schema (7 tables)
│   │   ├── index.ts            # Database connection
│   │   └── seed.ts             # Database seed script
│   ├── auth/
│   │   ├── jwt.ts              # JWT sign/verify
│   │   ├── password.ts         # bcrypt hash/verify
│   │   └── middleware.ts       # Auth middleware
│   └── api/
│       └── response.ts         # Response helpers and pagination
├── components/                 # React components
├── data/                       # Static data and SQLite database
├── types/                      # TypeScript type definitions
└── drizzle.config.ts           # Drizzle ORM configuration
```

## Database Schema

| Table | Description |
|-------|-------------|
| users | User accounts (name, email, password, role) |
| categories | Fashion categories with slugs |
| products | Products with pricing, variants, ratings |
| cart_items | User cart items with size/color |
| wishlist_items | User wishlist |
| orders | Orders with shipping address and payment info |
| order_items | Individual items within an order |
| reviews | Product reviews with ratings |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm db:seed` | Seed database with sample data |
| `pnpm db:studio` | Open Drizzle Studio (DB browser) |
