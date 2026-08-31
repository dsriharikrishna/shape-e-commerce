# Backend Architecture and Guidelines

This document tracks backend-related architectural decisions, guidelines, and project structures for the Shape E-Commerce platform.

## Current Tech Stack
- **Framework**: Express.js (Node.js)
- **Language**: TypeScript
- **Containerization**: Docker (multi-stage builds)
- **Tooling**: `ts-node-dev` for development, `tsc` for production builds.

## Important References
- For the full API schema and required endpoints, always refer to [API_CONTRACT.md](./API_CONTRACT.md).
- To see the frontend rules, refer to [FRONTEND.MD](./FRONTEND.md).

## Getting Started
The backend is located in the `backend/` directory.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

*This file will be updated as the backend architecture expands (e.g. adding database ORMs, caching strategies, or auth middleware).*
