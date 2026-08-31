# API Contract - Shape E-Commerce

## 1. Purpose
To define the backend API contract required to support the Shape E-Commerce frontend application.

## 2. Application Domain
Based on the frontend stores and types, the domain includes:
- **Products**: Items available for purchase (variants, pricing, stock).
- **Categories**: Groupings of products.
- **Cart/Checkout**: Shopping cart and order placement workflows.
- **Users**: Customers who can login, signup, and maintain sessions.
- **Corporate**: Contact forms and corporate inquiries.

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
| Order | `/orders` | POST | Checkout | Public/Auth | `OrderRequest`| `OrderResponse` |
| Contact| `/contact` | POST | Send Message | Public | `ContactRequest`| `SuccessResponse` |

## 10. API Specifications

### Auth APIs
**POST `/api/v1/auth/login`**
```ts
// Request
interface LoginRequest {
  email: string;
  password?: string;
}
// Response
interface LoginResponse {
  success: true;
  user: AuthUser;
  token: string;
}
```

**POST `/api/v1/auth/signup`**
```ts
// Request
interface SignupRequest {
  name: string;
  email: string;
  password?: string;
}
```

### Product APIs
**GET `/api/v1/products`**
Returns a paginated list of products. Supports query parameters for filtering by category, search terms, and sorting.

**GET `/api/v1/products/:id`**
Returns detailed information for a single product.

### Order APIs
**POST `/api/v1/orders`**
```ts
// Request
interface OrderRequest {
  items: Array<{ productId: string | number; quantity: number }>;
  shippingDetails: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    country: string;
    zipCode: string;
  };
  paymentMethod: string;
}
// Response
interface OrderResponse {
  success: true;
  orderId: string;
  status: "PENDING" | "PROCESSING";
}
```

### Corporate APIs
**POST `/api/v1/contact`**
```ts
// Request
interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
```

## 11. Database Entities
- **User**: `id`, `name`, `email`, `role`, `phone`, `avatar`
- **Product**: `id`, `title`, `price`, `oldPrice`, `imgSrc`, `category`, `description`
- **Order**: `id`, `userId` (nullable), `totalPrice`, `status`, `createdAt`
- **OrderItem**: `id`, `orderId`, `productId`, `quantity`, `price`
- **ContactInquiry**: `id`, `name`, `email`, `subject`, `message`, `createdAt`

## 12. Entity Relationships
- User (1) -> (M) Order
- Order (1) -> (M) OrderItem
- Product (1) -> (M) OrderItem

## 13. Frontend → Backend Mapping
| Frontend Feature | API | Backend Entity |
|------------------|-----|----------------|
| Login Modal (`Signin.tsx`) | POST `/auth/login` | User |
| Signup Modal (`Signup.tsx`) | POST `/auth/signup`| User |
| Shop Grid Page | GET `/products` | Product |
| Single Product | GET `/products/:id`| Product |
| Checkout Form | POST `/orders` | Order / OrderItem |
| Contact Form | POST `/contact` | ContactInquiry |

## 14. Implementation Recommendations
1. **Products**: Start by providing the `GET /products` API, as the entire frontend UI revolves around rendering the product grid. 
2. **Auth**: Implement Authentication (`/auth/login`, `/auth/signup`) so checkout flows can be associated with users.
3. **Data Fetching**: The frontend currently relies on static data (`allProducts`). The frontend team will need to replace these arrays with fetch calls using React Query, SWR, or native `fetch` when the APIs are ready.
