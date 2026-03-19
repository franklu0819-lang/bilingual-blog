# Technical Implementation Specs

## Internationalization (i18n)
- **Library**: next-intl
- **Routing**: Locale-based routing (e.g., /en/blog, /cn/blog).
- **Translations**: JSON files in `messages/` directory.

## Content System
- **Library**: Contentlayer
- **Content Storage**: `content/posts/` directory, organized by language folders (`en/`, `cn/`).
- **Post Metadata**: `title`, `date`, `description`, `tags`, `lang`.

## Project Structure
- `app/[locale]/`: Internationalized routes.
- `components/`: Reusable UI components.
- `content/`: MDX files.
- `messages/`: Translation files.
