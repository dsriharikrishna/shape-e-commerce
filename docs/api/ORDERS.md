# Order & Checkout APIs

## Overview
These endpoints handle the checkout process, order submission, and order tracking. Currently, the cart state is managed entirely on the client side via Zustand (`store.ts`), so the backend only receives the final order payload.

---

## 1. Create Order (Checkout)

**Endpoint:** `POST /api/v1/orders`
**Auth Required:** `Optional` (Supports guest checkout depending on configuration)

**Description:** Submits a final order with the cart contents, shipping details, and payment method.

### Request Body
```json
{
  "items": [
    {
      "productId": 101,
      "variantId": "var-black-L",
      "quantity": 2
    },
    {
      "productId": 204,
      "variantId": null,
      "quantity": 1
    }
  ],
  "shippingDetails": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "zipCode": "10001"
  },
  "paymentMethod": "CREDIT_CARD",
  "orderNotes": "Please leave at the front door."
}
```

### Response (201 Created)
```json
{
  "success": true,
  "data": {
    "orderId": "ORD-987654321",
    "status": "PENDING",
    "totalAmount": 345.50,
    "estimatedDelivery": "2026-09-05T00:00:00.000Z"
  }
}
```

### Error Responses
- **400 Bad Request:** Validation failed on shipping details or missing items.
- **422 Unprocessable Entity:** One or more items are out of stock.

---

## 2. Get Order History

**Endpoint:** `GET /api/v1/orders`
**Auth Required:** `Yes` (Requires `Authorization: Bearer <token>`)

**Description:** Retrieves a user's past orders.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "orderId": "ORD-987654321",
      "status": "SHIPPED",
      "totalAmount": 345.50,
      "createdAt": "2026-08-30T14:22:11.000Z",
      "items": [
        {
          "productId": 101,
          "title": "Classic Leather Jacket",
          "variant": "Black, Large",
          "quantity": 2,
          "price": 129.99
        }
      ]
    }
  ]
}
```

---

## 3. Get Single Order Details

**Endpoint:** `GET /api/v1/orders/:id`
**Auth Required:** `Yes` (Requires `Authorization: Bearer <token>`)

**Description:** Retrieves the full receipt and status of a specific order. Ensure the user can only view their own order unless they are an ADMIN.

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "orderId": "ORD-987654321",
    "status": "SHIPPED",
    "totalAmount": 345.50,
    "createdAt": "2026-08-30T14:22:11.000Z",
    "shippingDetails": {
      "address": "123 Main St",
      "city": "New York",
      "zipCode": "10001"
    },
    "items": [
      {
        "productId": 101,
        "title": "Classic Leather Jacket",
        "variant": "Black, Large",
        "quantity": 2,
        "price": 129.99
      }
    ]
  }
}
```

---

## 4. Cancel Order

**Endpoint:** `POST /api/v1/orders/:id/cancel`
**Auth Required:** `Yes` (Requires `Authorization: Bearer <token>`)

**Description:** Allows a user to cancel an order if it hasn't been shipped yet.

### Response (200 OK)
```json
{
  "success": true,
  "message": "Order ORD-987654321 has been cancelled successfully.",
  "data": {
    "status": "CANCELLED"
  }
}
```

---

## 5. Update Order Status (Admin)

**Endpoint:** `PATCH /api/v1/orders/:id/status`
**Auth Required:** `Yes` (Requires `ADMIN` role)

**Description:** Allows an administrator to update the fulfillment status of an order (e.g. from PENDING to SHIPPED to DELIVERED).

### Request Body
```json
{
  "status": "SHIPPED",
  "trackingNumber": "1Z9999999999999999"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "orderId": "ORD-987654321",
    "status": "SHIPPED"
  }
}
```
