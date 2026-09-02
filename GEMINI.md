# Gemini Knowledge Base Rules

# Gemini Knowledge Base Rules

## 1. File Map & Authority
Each file below is the SOURCE OF TRUTH for its domain. Do not duplicate its content into another file — link to it instead.

| File | Authority Over | Do NOT put here |
|---|---|---|
| `docs/PRODUCT.md` | High-level project overview: what the product is, tech stack summary, top-level folder purposes | Deep frontend implementation details (styling libs, state libs) — that belongs in `FRONTEND.MD` |
| `docs/FRONTEND.MD` | Frontend architecture: styling system, state/data-fetching libs, forms, detailed `src/` structure | Product-level overview — link back to `PRODUCT.md` instead of repeating it |
| `docs/BACKEND.MD` | Backend stack, folder structure, dev setup commands | Endpoint schemas — those belong in `API_CONTRACT.md` and `docs/api/*.md` |
| `docs/API_CONTRACT.md` | Master API index: conventions, common types, the API inventory TABLE (endpoint/method/purpose only), DB entities, frontend→backend mapping | Full request/response payloads — those belong in `docs/api/*.md` |
| `docs/api/AUTH.md`, `docs/api/PRODUCTS.md`, `docs/api/ORDERS.md`, `docs/api/BLOGS.md`, `docs/api/CMS.md` | Full payload/schema detail for their module | Do not add new endpoints here without also updating the inventory table in `API_CONTRACT.md` |
| `docs/CMS.md` | CMS *strategy*: which features are CMS-driven, static-mock migration plan, admin role requirements | Endpoint payloads — those belong in `docs/api/CMS.md`. **These are two different files with the same name in different folders — always specify the full path when reading/editing.** |
| `docs/PROJECT_MAP.md` | Frontend-only: page-by-page component map, shared component impact/reverse-lookup | Backend/API changes — do not add endpoints or backend structure here |
| `docs/LOGS.md` | Append-only changelog of what was done, in what order, why | Do not use this as a design doc — decisions go in the relevant architecture file, only the fact that a change happened goes here |

## 2. Known Overlaps — Consistency Rules
- `PRODUCT.md` and `FRONTEND.MD` both describe tech stack and folder structure. `FRONTEND.MD` is authoritative for frontend detail. If you update one and it affects the other's claims, update both in the same task — do not let them silently diverge.
- `API_CONTRACT.md` §9 (inventory table) must always match the actual endpoints documented in `docs/api/*.md`. If you add/remove/change an endpoint in a module file, update the inventory table row in the same task.
- `docs/CMS.md` (strategy) and `docs/api/CMS.md` (endpoint spec) must stay aligned on which endpoints exist. If you add a new CMS endpoint, update both.

## 3. Read Order by Task Type
Before starting work, read only what's relevant to the task:
- **Frontend UI/component task** → `PROJECT_MAP.md` first (locate the page/component and its shared-impact blast radius), then `FRONTEND.MD` for conventions.
- **Backend/API task** → `API_CONTRACT.md` first (index + types), then the specific `docs/api/*.md` module file.
- **New feature spanning both** → `PRODUCT.md` for overview, then both `FRONTEND.MD` and `BACKEND.MD`.
- **CMS-related task** → `docs/CMS.md` for strategy/scope, `docs/api/CMS.md` for the actual endpoint contract.
- Always check `LOGS.md`'s most recent entries before starting, to see if related work was already done or is in progress.

## 4. What Counts as a "Significant Change" (update docs after these, nothing smaller)
- Adding, removing, or renaming a page/route → update `PROJECT_MAP.md`
- Adding, removing, or renaming a shared/reusable component, OR changing which pages a shared component is used on → update `PROJECT_MAP.md` (component list + reverse-lookup section)
- Adding, removing, or changing an API endpoint (path, method, request/response shape) → update BOTH `API_CONTRACT.md` (inventory table) and the relevant `docs/api/*.md`
- Changing the tech stack (new library, replacing one) → update `FRONTEND.MD` or `BACKEND.MD` as applicable, and `PRODUCT.md` if it's a top-level stack change
- Changing global design tokens or global style overrides (colors, link/list resets) → update `FRONTEND.MD` and note it in `PROJECT_MAP.md`'s Global Definitions section
- Deleting/renaming files as part of cleanup (like the Footer/Header consolidation already logged) → update whichever doc referenced the old names, and log it

Do NOT update docs for: typo fixes, minor style tweaks within a component's own file, temporary debugging code, or anything that doesn't change structure/contracts/architecture.

## 5. How to Update Each File
- **`PROJECT_MAP.md`**: Patch only the affected page section(s) — do not regenerate the whole file. Preserve unaffected page sections exactly as-is. Update the reverse-lookup list wherever a shared component's usage changed.
- **`API_CONTRACT.md`**: Patch the specific table row(s)/type(s) affected. Do not rewrite unrelated sections.
- **`docs/api/*.md`**: Add/edit the specific endpoint section following the existing format (Endpoint/Auth/Description/Request/Response/Errors).
- **`FRONTEND.MD` / `BACKEND.MD` / `PRODUCT.md` / `CMS.md`**: Edit the specific subsection affected. These are living architecture docs, not logs — don't append, edit in place.
- **`LOGS.md`**: APPEND a new dated entry at the top, matching the existing format exactly:

  Never edit or delete past log entries.

## 6. Handling Stale or Contradictory Docs
If a doc contradicts what you find in the actual code:
1. Do NOT silently trust the doc and do NOT silently trust the code.
2. Flag the discrepancy to me explicitly before proceeding, stating which file said what vs. what the code actually does.
3. Only fix the doc to match the code if I confirm the code is correct and current.

## 7. End-of-Task Reporting (mandatory)
At the end of any task that touched code, report:
- Which doc file(s) you updated (or explicitly state "no docs required updating" and why, based on §4)
- Which doc file(s) you read but did NOT need to update
- Any discrepancy you flagged per §6 that's still unresolved

## 8. Staleness Maintenance
`PROJECT_MAP.md` and `API_CONTRACT.md` are the highest-drift-risk files. After any batch of unrelated changes (multiple tasks without doc updates, or a suspected gap), run a dedicated sync pass: compare the doc against the actual codebase, patch drift, and log the sync in `LOGS.md`.
