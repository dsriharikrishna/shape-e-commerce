# Blog APIs

## Overview
These endpoints support the e-commerce blog section, rendering articles, categories, and single post details.

---

## 1. List Blogs

**Endpoint:** `GET /api/v1/blogs`
**Auth Required:** `No`

**Description:** Retrieves a paginated list of blog articles.

### Query Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | Integer | No | Page number (default: `1`) |
| `pageSize` | Integer | No | Items per page (default: `10`) |
| `category` | String | No | Filter by blog category |

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Top 10 Fashion Trends for Fall",
      "description": "Discover the latest styles you need to stay cozy and chic this season.",
      "author": "Sarah Jenkins",
      "date": "2026-08-15T00:00:00.000Z",
      "category": "Fashion",
      "image": "/assets/images/blog/trend-fall.jpg",
      "readTime": "5 min read"
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 45,
    "totalPages": 5
  }
}
```

---

## 2. Get Single Blog

**Endpoint:** `GET /api/v1/blogs/:id`
**Auth Required:** `No`

**Description:** Retrieves the full content of a specific blog post.

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Top 10 Fashion Trends for Fall",
    "description": "Discover the latest styles you need to stay cozy and chic this season.",
    "content": "<p>Full HTML content of the blog goes here...</p>",
    "author": "Sarah Jenkins",
    "date": "2026-08-15T00:00:00.000Z",
    "category": "Fashion",
    "image": "/assets/images/blog/trend-fall.jpg",
    "readTime": "5 min read",
    "images": [
      "/assets/images/blog/gallery-1.jpg",
      "/assets/images/blog/gallery-2.jpg"
    ]
  }
}
```

---

## 3. List Blog Categories

**Endpoint:** `GET /api/v1/blogs/categories`
**Auth Required:** `No`

**Description:** Retrieves a distinct list of blog categories with their respective post counts, usually used for the blog sidebar widget.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "category": "Fashion",
      "count": 12
    },
    {
      "category": "Lifestyle",
      "count": 8
    }
  ]
}
```

---

## 4. Blog Comments

**Endpoint:** `GET /api/v1/blogs/:id/comments`
**Auth Required:** `No`

**Description:** Retrieves paginated comments for a specific blog post.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 101,
      "userName": "David Miller",
      "comment": "Great article! Very helpful for the upcoming season.",
      "createdAt": "2026-08-16T10:30:00.000Z"
    }
  ]
}
```

**Endpoint:** `POST /api/v1/blogs/:id/comments`
**Auth Required:** `Yes` (Requires `Authorization: Bearer <token>`)

**Description:** Submits a comment on a blog post.

### Request Body
```json
{
  "comment": "I completely agree with the second point!"
}
```

---

## 5. Admin Blog Management

*These endpoints are restricted to users with the `ADMIN` role.*

- **`POST /api/v1/blogs`**: Create a new blog post.
- **`PUT /api/v1/blogs/:id`**: Update an existing blog post (content, title, images).
- **`DELETE /api/v1/blogs/:id`**: Delete a blog post.
