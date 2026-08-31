# Authentication APIs

## Overview
These endpoints handle user registration, login, and token management to support the Next.js frontend (Zustand `authStore.ts`).

---

## 1. User Login

**Endpoint:** `POST /api/v1/auth/login`
**Auth Required:** `No`

**Description:** Authenticates a user and returns a JWT token along with user details.

### Request Body
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com",
      "role": "CUSTOMER",
      "phone": "+1234567890",
      "avatar": "https://example.com/avatar.jpg"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5c..."
  }
}
```

### Error Responses
- **401 Unauthorized:** Invalid credentials.
- **400 Bad Request:** Missing email or password.

---

## 2. User Registration

**Endpoint:** `POST /api/v1/auth/signup`
**Auth Required:** `No`

**Description:** Registers a new user account.

### Request Body
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword123",
  "phone": "+0987654321" 
}
```

### Response (201 Created)
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@example.com",
      "role": "CUSTOMER",
      "phone": "+0987654321",
      "avatar": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5c..."
  }
}
```

### Error Responses
- **409 Conflict:** Email already exists.
- **400 Bad Request:** Password too weak, or invalid email format.

---

## 3. Get Current User Profile

**Endpoint:** `GET /api/v1/users/me`
**Auth Required:** `Yes` (Requires `Authorization: Bearer <token>`)

**Description:** Retrieves the authenticated user's profile information. Used to restore session on page reload.

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com",
    "role": "CUSTOMER",
    "phone": "+1234567890",
    "avatar": "https://example.com/avatar.jpg"
  }
}
```

---

## 4. Update User Profile

**Endpoint:** `PUT /api/v1/users/me`
**Auth Required:** `Yes` (Requires `Authorization: Bearer <token>`)

**Description:** Updates the user's personal information (e.g., from an Account Dashboard).

### Request Body
```json
{
  "name": "Johnathan Doe",
  "phone": "+19876543210"
}
```

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Johnathan Doe",
    "email": "user@example.com",
    "role": "CUSTOMER",
    "phone": "+19876543210",
    "avatar": "https://example.com/avatar.jpg"
  }
}
```
