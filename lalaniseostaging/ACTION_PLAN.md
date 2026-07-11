# SEO & AI Search Action Plan

## 1. Invalid Structured Data
- **Files Involved:** `src/app/products/page.tsx`
- **What I Can Safely Change:** The `ItemList` schema in this file is invalid because `ListItem` requires an `item` or `url` property. I can add the correct URLs to the `ListItem` elements mapping to existing category pages (e.g., `/products/computing`).
- **What Requires Human Input:** Verifying that these category URLs remain the exact intended targets.
- **Risk Level:** Low.

## 2. llms.txt Formatting Issues
- **Files Involved:** `public/llms.txt`
- **What I Can Safely Change:** Remove non-standard Unicode box-drawing characters (e.g., `─── Company Overview ───`) and replace them with standard Markdown headings (`## Company Overview`) to ensure parsing tools don't fail.
- **What Requires Human Input:** None (the policy text will remain untouched).
- **Risk Level:** Low.

## 3. Low Text-to-HTML Ratio & Low Word Count Pages
- **Files Involved:** Legal pages (`privacy/page.tsx`, `terms/page.tsx`) or specific solution pages.
- **What I Can Safely Change:** I can add small, factual, benefit-focused introductory sentences expanding on existing messaging. Where deeper content is needed, I will insert clear `<!-- TODO: Human Copywriting -->` placeholders.
- **What Requires Human Input:** Real legal text, pricing, case studies, and sensitive business claims.
- **Risk Level:** Medium.

## 4. Long Title Elements
- **Files Involved:** `src/app/page.tsx`, `src/app/layout.tsx`.
- **What I Can Safely Change:** Shorten the homepage title tag from `Lalani Computers | Corporate IT Hardware & Turnkey Solutions Mumbai` to `Corporate IT Hardware & Solutions | Lalani Computers` to prevent truncation in SERPs.
- **What Requires Human Input:** Final approval of the brand positioning.
- **Risk Level:** Low.

## 5. Links with No Anchor Text
- **Files Involved:** Various components using icon-only links or image links.
- **What I Can Safely Change:** Add descriptive `aria-label` attributes to these links to ensure accessibility and clear context for search engines.
- **What Requires Human Input:** None.
- **Risk Level:** Low.

## 6. Pages with Only One Incoming Internal Link
- **Files Involved:** Industry pages under `/clients/industries/` or the `/about` page.
- **What I Can Safely Change:** Add contextual internal links from high-traffic pages (like `solutions/page.tsx` or `products/page.tsx`) pointing to these isolated pages.
- **What Requires Human Input:** Ensuring the user journey aligns with business goals.
- **Risk Level:** Low.

## 7. AI Crawler Rules (ChatGPT-User)
- **Files Involved:** `src/app/robots.ts`.
- **What I Can Safely Change:** The current configuration explicitly blocks `ChatGPT-User`, `GPTBot`, etc., from `/`. I will change this to `allow: '/'` so AI engines can digest the public site context. General block rules for `/api/` and `/admin/` will remain intact.
- **What Requires Human Input:** None, assuming the strategy is to maximize AI visibility for public content.
- **Risk Level:** Low.

---

## Notes
- **Assumptions made:** Assumed the site strategy actively encourages AI answer engines to index public content.
- **Unclear items:** None.
- **Manual verification required:** Review the proposed fixes for any conflicts with business messaging before migrating to production.
