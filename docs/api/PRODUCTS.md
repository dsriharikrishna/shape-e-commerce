# Product & Category APIs

## Overview
These endpoints support the e-commerce shop grid, filtering, individual product detail pages, and category browsing.

---

## 1. List Products

**Endpoint:** `GET /api/v1/products`
**Auth Required:** `No`

**Description:** Retrieves a paginated list of products. Supports extensive filtering for the Shop grid (e.g., category, price ranges, search).

### Query Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | Integer | No | Page number (default: `1`) |
| `pageSize` | Integer | No | Items per page (default: `12`) |
| `category` | String | No | Filter by category name/slug |
| `search` | String | No | Search by product title |
| `minPrice` | Number | No | Filter by minimum price |
| `maxPrice` | Number | No | Filter by maximum price |
| `sortBy` | String | No | Sort field (`price`, `createdAt`, `rating`) |
| `sortOrder`| String | No | Sort direction (`asc`, `desc`) |

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 101,
      "title": "Classic Leather Jacket",
      "price": 129.99,
      "oldPrice": 159.99,
      "imgSrc": "/assets/images/products/jacket.jpg",
      "category": ["Fashion", "Men"],
      "inStock": true,
      "rating": 4.5,
      "reviewCount": 12
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 12,
    "total": 145,
    "totalPages": 13
  }
}
```

---

## 2. Get Product Details

**Endpoint:** `GET /api/v1/products/:id`
**Auth Required:** `No`

**Description:** Retrieves the comprehensive details for a single product, including variants, images, and extra details.

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "id": 101,
    "title": "Classic Leather Jacket",
    "price": 129.99,
    "oldPrice": 159.99,
    "imgSrc": "/assets/images/products/jacket.jpg",
    "hoverImgSrc": "/assets/images/products/jacket-back.jpg",
    "category": ["Fashion", "Men"],
    "inStock": true,
    "discount": 30,
    "variants": [
      { "color": "Black", "hex": "#000000", "active": true },
      { "color": "Brown", "hex": "#8B4513", "active": false }
    ],
    "frameSlides": [
      { "src": "/assets/images/products/jacket-slide1.jpg" },
      { "src": "/assets/images/products/jacket-slide2.jpg" }
    ],
    "description": "A timeless classic leather jacket designed for durability."
  }
}
```
### Error Responses
- **404 Not Found:** Product ID does not exist.

---

## 3. List Categories

**Endpoint:** `GET /api/v1/categories`
**Auth Required:** `No`

**Description:** Retrieves all available product categories to populate dropdowns and category grids on the homepage.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Men's Fashion",
      "imgSrc": "/assets/images/categories/men.jpg",
      "count": 45
    },
    {
      "id": 2,
      "title": "Women's Fashion",
      "imgSrc": "/assets/images/categories/women.jpg",
      "count": 82
    }
  ]
}
```

---

## 4. Get Similar Products

**Endpoint:** `GET /api/v1/products/:id/similar`
**Auth Required:** `No`

**Description:** Retrieves a list of products related to the specified product ID (e.g., same category, similar price point). Used to populate the "Similar Products" or "Bought Together" sections on the product detail page.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 105,
      "title": "Leather Gloves",
      "price": 45.00,
      "imgSrc": "/assets/images/products/gloves.jpg",
      "category": ["Fashion", "Accessories"],
      "rating": 4.8
    }
  ]
}
```

---

## 5. Product Reviews

**Endpoint:** `GET /api/v1/products/:id/reviews`
**Auth Required:** `No`

**Description:** Retrieves paginated reviews for a specific product.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 501,
      "userName": "Jane Smith",
      "rating": 5,
      "comment": "Absolutely love this jacket!",
      "createdAt": "2026-08-25T10:00:00.000Z"
    }
  ]
}
```

**Endpoint:** `POST /api/v1/products/:id/reviews`
**Auth Required:** `Yes` (Requires `Authorization: Bearer <token>`)

**Description:** Allows an authenticated user to submit a review for a product.

### Request Body
```json
{
  "rating": 5,
  "comment": "Perfect fit and great quality."
}
```

---

## 6. Admin Product Management

*These endpoints are restricted to users with the `ADMIN` role.*

- **`POST /api/v1/products`**: Create a new product.
- **`PUT /api/v1/products/:id`**: Update an existing product (price, stock, variants).
- **`DELETE /api/v1/products/:id`**: Delete or hide a product from the storefront.
