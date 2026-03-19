## ADDED Requirements

### Requirement: Responsive Layout
The system SHALL provide a responsive layout that adapts to different screen sizes (mobile, tablet, desktop).

#### Scenario: Mobile view access
- **WHEN** user views the blog on a mobile device (width < 768px)
- **THEN** the system SHALL render a mobile-optimized UI (e.g., hidden or compact sidebar)

### Requirement: Blog Post List
The system SHALL display a list of blog posts with metadata (title, date, description).

#### Scenario: List viewing
- **WHEN** user visits the Home or Blog page
- **THEN** the system SHALL render a list of recent blog posts for the current language

### Requirement: Dark/Light Mode
The system SHALL support both dark and light color themes, defaulting to the user's system preference.

#### Scenario: Theme switching
- **WHEN** user changes the theme toggle
- **THEN** the system SHALL apply the selected (dark or light) theme across all pages
