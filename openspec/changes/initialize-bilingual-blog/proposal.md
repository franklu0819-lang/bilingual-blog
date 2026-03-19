## Why

This change initializes and develops a bilingual (Chinese/English) technical blog as defined in the project's core specifications. It provides a modern, high-performance platform for technical content with seamless language switching and developer-friendly maintenance.

## What Changes

- **Project Infrastructure**: Initialize Next.js (App Router) with TypeScript and Tailwind CSS.
- **I18n Framework**: Implement a robust internationalization system for routing and translations (EN/CN).
- **Content Engine**: Set up MDX processing with Contentlayer for structured blog post management.
- **Core Components**: Develop a responsive layout including a language switcher and navigation.
- **Key Pages**: Implementation of Home (post list), Blog (filtered list), About, and Projects pages.
- **Deployment**: Configure for seamless Vercel deployment.

## Capabilities

### New Capabilities
- `i18n-engine`: Provides language-aware routing, translation utilities, and a language switcher component.
- `content-system`: Handles MDX post parsing, metadata extraction, and type-safe content access.
- `blog-ui`: Implements the visual identity, responsive layouts, and core page templates.

### Modified Capabilities
- (None - this is the initial project setup)

## Impact

- **Codebase**: Establishes the entire repository structure and tech stack.
- **Dependencies**: Introduces Next.js, TypeScript, Tailwind CSS, Contentlayer, and i18n libraries.
- **Deployment**: Sets up the Vercel CI/CD pipeline configuration.
