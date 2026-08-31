# Frontend Architecture & Technology Stack

This document outlines the frontend technologies, architecture, and UI structure of the Tryshape e-commerce application based on the project analysis.

## 1. Core Framework
- **Next.js (16.3.3):** The application is built on Next.js using the modern App Router architecture, enabling server components and optimized routing.
- **React (19.2.8):** Utilizes the latest features of React 19 for building interactive user interfaces.
- **TypeScript:** The entire frontend is strongly typed to ensure reliability and maintainability.

## 2. Styling Structure & Libraries
Our styling is a hybrid approach combining utility classes with a highly modular custom styling architecture.
- **Tailwind CSS (v4):** The primary utility-first CSS framework used for responsive and modern styling directly within TSX files. It is imported globally via `src/app/globals.css`.
- **SASS (.scss) Architecture:** Used for advanced custom styles and overrides not easily achieved with utility classes. The SCSS is heavily compartmentalized and located in `public/assets/scss/`. It is structured into multiple directories separating concerns:
  - Base stylesheets: `main.scss` and `style.scss`
  - Component/page specific folders: `header/`, `footer/`, `blog/`, `shop/`, `dashboard/`, `elements/`, and `inner-pages/`.
- **Bootstrap (v5.3):** Included in the project, working alongside our custom SCSS architecture to provide base layouts and classic component structures.
- **Framer Motion & tw-animate-css:** Powers complex, fluid animations and page transitions.
- **Base UI & Shadcn:** Provide accessible, highly customizable UI primitive components.
- **Swiper & Fancyapps UI:** Power the image galleries, product carousels, and sliders.
- **Icons:** A mix of Lucide React and Phosphor Icons are used throughout the UI.

## 3. Client State & Data Fetching
- **Zustand:** A lightweight and fast global state manager. It handles client-side state requirements such as:
  - Shopping Cart data
  - Wishlist management
  - User session UI state
- **TanStack React Query:** Handles asynchronous state management, specifically for server state, API data fetching, and caching.

## 4. Forms & Validation
- **React Hook Form:** The standard library used for building performant and flexible forms (e.g., checkout, login, newsletter).
- **Zod:** Works in tandem with React Hook Form to provide schema-based form validation.

## 5. Architectural Structure (Feature-Sliced Design)
The frontend code in the `src/` directory is organized into domains to keep components and logic strictly scoped:
- **`src/app/`**: Defines the routes, page layouts, and entry points.
- **`src/features/`**: Contains domain-specific UI components, data logic, and state. Key domains include:
  - `auth`
  - `blog`
  - `cart`
  - `checkout`
  - `home`
  - `products`
  - `shop`
- **`src/shared/`**: Contains globally reused frontend assets:
  - `components/` (Shared UI like Headers, Footers, Modals)
  - `hooks/` (Custom React hooks)
  - `store/` (Zustand setups)
  - `utils/` (Formatters and helper logic)
