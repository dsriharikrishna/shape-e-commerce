# API Contract - Shape E-Commerce

## 1. Purpose
To define the backend API contract required to support the Shape E-Commerce frontend application.

## 2. Application Domain
Based on the frontend features, stores, and types, the domain includes:
- **Products**: Items available for purchase (variants, pricing, stock).
- **Categories**: Groupings of products.
- **Cart/Checkout**: Shopping cart and order placement workflows.
- **Users**: Customers who can login, signup, and maintain sessions.
- **Blogs**: E-commerce blog posts and news.
- **Corporate/CMS**: Static-like content such as Contact forms, Testimonials, Brands, and Team Members.

## 3. Architecture Overview
The frontend is a Next.js application that relies on Zustand for global state management (`store.ts`, `authStore.ts`). Currently, it uses static data arrays. The required backend should provide standard REST APIs to replace these static data stores.

## 4. Authentication & Authorization
- **Strategy**: JWT (JSON Web Tokens).
- **Storage**: Frontend uses `authStore.ts` to persist `token` and `user` state.
- **Header**: `Authorization: Bearer <token>`
- **Roles**: `CUSTOMER`, `ADMIN`.
- **Protection**: Product/Category APIs are Public. Checkout requires Authentication (or allows Guest checkout depending on business rules).

## 5. API Conventions
- Base URL: `/api/v1`
- Format: JSON (`application/json`)

## 6. Common Types
```ts
export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
  phone?: string | null;
  avatar?: string | null;
}

export interface Product {
  id: number | string;
  title: string;
  price: number;
  oldPrice?: number | null;
  imgSrc: string;
  category?: string[];
  inStock?: boolean;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  title: string;
  imgSrc: string;
  count?: number;
}

export interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  author: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}
```

## 7. Error Contract
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable message",
    "details": {}
  }
}
```

## 8. Pagination / Filtering
```ts
interface PaginationQuery {
  page?: number;
  pageSize?: number;
  search?: string;
  category?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
```

## 9. API Inventory
| Module | API | Method | Purpose | Auth | Request | Response |
|--------|-----|--------|---------|------|---------|----------|
| Auth | `/auth/login` | POST | Login | Public | `LoginRequest` | `LoginResponse` |
| Auth | `/auth/signup` | POST | Register | Public | `SignupRequest` | `LoginResponse` |
| Product | `/products` | GET | List Products | Public | `PaginationQuery` | `PaginatedResponse<Product>` |
| Product | `/products/:id` | GET | Product details| Public | - | `Product` |
| Category| `/categories` | GET | List Categories| Public | - | `Category[]` |
| Order | `/orders` | POST | Checkout | Public/Auth | `OrderRequest`| `OrderResponse` |
| Blog | `/blogs` | GET | List Blogs | Public | `PaginationQuery` | `PaginatedResponse<BlogPost>` |
| Blog | `/blogs/:id` | GET | Blog details | Public | - | `BlogPost` |
| CMS | `/brands` | GET | List Brands | Public | - | `Brand[]` |
| CMS | `/testimonials`| GET | List Testimonials| Public| - | `Testimonial[]` |
| CMS | `/team` | GET | List Team Members| Public| - | `TeamMember[]` |
| Corporate| `/contact` | POST | Send Message | Public | `ContactRequest`| `SuccessResponse` |

## 10. Detailed API Specifications
For detailed request/response JSON payloads, status codes, and endpoint schemas, refer to the individual module documents:

- 🔐 **[Authentication & User APIs](./api/AUTH.md)** (`/auth/login`, `/auth/signup`, `/users/me`)
- 🛒 **[Product & Category APIs](./api/PRODUCTS.md)** (`/products`, `/categories`)
- 📦 **[Order & Checkout APIs](./api/ORDERS.md)** (`/orders`, `/orders/:id`)
- 📰 **[Blog APIs](./api/BLOGS.md)** (`/blogs`, `/blogs/:id`)
- 🏢 **[CMS & Corporate APIs](./api/CMS.md)** (`/brands`, `/testimonials`, `/team`, `/contact`)

## 11. Database Entities
- **User**: `id`, `name`, `email`, `role`, `phone`, `avatar`
- **Product**: `id`, `title`, `price`, `oldPrice`, `imgSrc`, `category`, `description`
- **Category**: `id`, `title`, `imgSrc`
- **Order**: `id`, `userId` (nullable), `totalPrice`, `status`, `createdAt`
- **OrderItem**: `id`, `orderId`, `productId`, `quantity`, `price`
- **BlogPost**: `id`, `title`, `description`, `author`, `image`, `date`, `categoryId`
- **ContactInquiry**: `id`, `name`, `email`, `subject`, `message`, `createdAt`

## 12. Entity Relationships
- User (1) -> (M) Order
- Order (1) -> (M) OrderItem
- Product (1) -> (M) OrderItem
- Category (1) -> (M) Product
- Category (1) -> (M) BlogPost

## 13. Frontend → Backend Mapping
| Frontend Feature | API | Backend Entity |
|------------------|-----|----------------|
| Login Modal (`Signin.tsx`) | POST `/auth/login` | User |
| Signup Modal (`Signup.tsx`) | POST `/auth/signup`| User |
| Shop Grid Page | GET `/products` | Product |
| Single Product | GET `/products/:id`| Product |
| Home / Categories| GET `/categories` | Category |
| Blog Grid Page | GET `/blogs` | BlogPost |
| Single Blog | GET `/blogs/:id` | BlogPost |
| Checkout Form | POST `/orders` | Order / OrderItem |
| Contact Form | POST `/contact` | ContactInquiry |
| About Us / CMS | GET `/team`, `/brands`, `/testimonials` | Team, Brand, Testimonial |

## 14. Implementation Recommendations
1. **Products & Categories**: Start by providing the `GET /products` and `GET /categories` APIs, as the entire frontend UI revolves around rendering the product grids and navigation. 
2. **Auth**: Implement Authentication (`/auth/login`, `/auth/signup`) so checkout flows can be associated with users.
3. **Data Fetching**: The frontend currently relies on static data (`allProducts`, `blogs`, `categories`). The frontend team will need to replace these arrays with fetch calls using React Query, SWR, or native `fetch` when the APIs are ready.
