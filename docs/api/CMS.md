# CMS & Corporate APIs

## Overview
These endpoints support the static-like UI content populated on the Home, About Us, and Contact pages.

---

## 1. List Brands

**Endpoint:** `GET /api/v1/brands`
**Auth Required:** `No`

**Description:** Retrieves partner/brand logos to display in the homepage marquee or footer.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Nike",
      "logo": "/assets/images/brands/nike-logo.png"
    },
    {
      "id": 2,
      "name": "Adidas",
      "logo": "/assets/images/brands/adidas-logo.png"
    }
  ]
}
```

---

## 2. List Testimonials

**Endpoint:** `GET /api/v1/testimonials`
**Auth Required:** `No`

**Description:** Retrieves user reviews and testimonials for social proof sections.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Michael Roberts",
      "role": "Verified Buyer",
      "text": "The shipping was incredibly fast and the quality of the jacket is unmatched.",
      "rating": 5,
      "image": "/assets/images/testimonials/michael.jpg"
    }
  ]
}
```

---

## 3. List Team Members

**Endpoint:** `GET /api/v1/team`
**Auth Required:** `No`

**Description:** Retrieves the leadership/staff team for the About Us page.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Emma Watson",
      "role": "CEO & Founder",
      "image": "/assets/images/team/emma.jpg"
    }
  ]
}
```

---

## 4. Contact Us Inquiry

**Endpoint:** `POST /api/v1/contact`
**Auth Required:** `No`

**Description:** Accepts submissions from the Corporate Contact forms.

### Request Body
```json
{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "phone": "555-0198",
  "subject": "Bulk Order Inquiry",
  "message": "I would like to inquire about purchasing 50 units for my company."
}
```

### Response (201 Created)
```json
{
  "success": true,
  "message": "Your inquiry has been received. We will get back to you shortly."
}
```

---

## 5. List Hero Slides

**Endpoint:** `GET /api/v1/hero-slides`
**Auth Required:** `No`

**Description:** Retrieves the dynamic hero banners for the homepage slider.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Summer Collection 2026",
      "subtitle": "Get up to 50% off",
      "image": "/assets/images/hero/slide1.jpg",
      "link": "/shop?category=summer"
    }
  ]
}
```

---

## 6. List FAQs

**Endpoint:** `GET /api/v1/faqs`
**Auth Required:** `No`

**Description:** Retrieves the frequently asked questions for the FAQ page.

### Response (200 OK)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "question": "How long does shipping take?",
      "answer": "Standard shipping usually takes 3-5 business days."
    }
  ]
}
```

---

## 7. Newsletter Subscription

**Endpoint:** `POST /api/v1/newsletter`
**Auth Required:** `No`

**Description:** Subscribes a user's email address to the mailing list (usually from the footer).

### Request Body
```json
{
  "email": "user@example.com"
}
```

### Response (201 Created)
```json
{
  "success": true,
  "message": "Successfully subscribed to the newsletter!"
}
```

---

## 8. Admin CMS Management

*These endpoints are restricted to users with the `ADMIN` role.*

Administrators can use `POST`, `PUT`, and `DELETE` methods against the following resources to manage the storefront content without deploying code:
- `/api/v1/hero-slides`
- `/api/v1/brands`
- `/api/v1/testimonials`
- `/api/v1/team`
- `/api/v1/faqs`
