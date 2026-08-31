# CMS (Content Management System) Architecture

## 1. Overview
The Shape E-Commerce platform utilizes a lightweight, decoupled headless CMS architecture. This allows site administrators to update marketing materials, brand assets, and textual content without requiring code deployments.

## 2. CMS-Driven Features
The following features are designed to be dynamically driven by the backend CMS rather than hardcoded in the frontend templates:

- **Hero Banners**: The homepage main slider featuring seasonal promotions, discounts, and high-quality imagery.
- **Brand Carousels**: The rolling marquee of partner or client logos.
- **Testimonials/Reviews**: User-submitted or curated reviews used for social proof on landing pages.
- **Team Roster**: The "About Us" page staff listing.
- **FAQs**: Frequently asked questions and their answers.
- **Contact Inquiries**: Form submissions from the "Contact Us" page.
- **Newsletter Subscribers**: Captured email addresses for marketing campaigns.

## 3. Current Frontend State (Static Mocking)
Currently, the frontend relies on static TypeScript objects located in `src/shared/data/`. These files act as a mock database during the UI development phase:
- `heroSlides.ts`
- `brands.ts`
- `testimonials.ts`
- `team.ts`

**Migration Plan**: 
Once the backend API is deployed, the frontend team must replace imports of these static files with asynchronous data fetching (e.g., using React Server Components or `React Query`) pointing to the endpoints defined below.

## 4. API Integration
The CMS relies on a standard REST API. For the exhaustive list of payloads, request schemas, and responses, please refer to the detailed contract:
👉 **[CMS API Contract](./api/CMS.md)**

### Quick Reference Endpoints:
- `GET /api/v1/hero-slides`
- `GET /api/v1/faqs`
- `GET /api/v1/brands`
- `GET /api/v1/testimonials`
- `GET /api/v1/team`
- `POST /api/v1/newsletter`
- `POST /api/v1/contact`

## 5. Admin Management
Updating CMS content requires the `ADMIN` role. The backend will expose authenticated `POST`, `PUT`, and `DELETE` routes for all CMS resources. 

*(Note: The frontend admin dashboard UI for managing these resources is outside the scope of the customer-facing storefront and will be developed as a separate internal tool or admin route group).*
