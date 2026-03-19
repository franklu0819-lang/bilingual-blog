## ADDED Requirements

### Requirement: MDX Processing
The system SHALL process MDX files for blog post content, allowing React components within Markdown.

#### Scenario: Post with MDX components
- **WHEN** user views a post with a custom React component (e.g., `<Button />`)
- **THEN** the system SHALL render the component correctly alongside Markdown content

### Requirement: Type-Safe Frontmatter
The system SHALL extract and validate frontmatter metadata (title, date, description, language, tags) for each blog post.

#### Scenario: Metadata access
- **WHEN** user views a post list
- **THEN** the system SHALL display the correct title and date extracted from the frontmatter

### Requirement: Bilingual Posts
The system SHALL support separate MDX files for the same post in different languages, identified by language metadata.

#### Scenario: Language-specific post content
- **WHEN** user visits `/en/blog/my-post` and `/zh/blog/my-post`
- **THEN** the system SHALL render the English and Chinese versions of "my-post" respectively
