## 1. Project Setup

- [ ] 1.1: Initialize Next.js project using `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes`.
- [ ] 1.2: Install core dependencies: `next-intl`, `contentlayer`, `next-contentlayer`, `lucide-react`, `clsx`, `tailwind-merge`.
- [ ] 1.3: Configure `contentlayer.config.ts` with Post schema (title, date, description, language, tags).
- [ ] 1.4: Set up `i18n.ts` and middleware for `next-intl` to handle English (`en`) and Chinese (`zh`) routes.

## 2. Core Components & Layout

- [ ] 2.1: Implement `LanguageSwitcher` component with support for toggling between `en` and `zh`.
- [ ] 2.2: Build global `Navbar` and `Footer` with bilingual navigation links.
- [ ] 2.3: Configure Tailwind theme and basic styles for light/dark mode support.
- [ ] 2.4: Implement a base layout at `app/[locale]/layout.tsx` using `NextIntlClientProvider`.

## 3. Content System Implementation

- [ ] 3.1: Create sample bilingual posts in `content/posts/` (e.g., `my-first-post.en.mdx` and `my-first-post.zh.mdx`).
- [ ] 3.2: Build Post list component that filters content based on the current locale.
- [ ] 3.3: Implement Post detail page at `app/[locale]/blog/[slug]/page.tsx` with MDX rendering.

## 4. Pages & Refinement

- [ ] 4.1: Implement Home page (`app/[locale]/page.tsx`) with the latest posts list.
- [ ] 4.2: Implement About and Projects pages with bilingual content.
- [ ] 4.3: Add metadata and SEO tags for each locale.
- [ ] 4.4: Verify responsiveness across devices and finalize Vercel deployment configuration.
