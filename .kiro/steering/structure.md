# Project Structure

```
├── blog/                    # Blog posts (MDX files)
│   ├── authors.yml          # Blog author definitions
│   ├── tags.yml             # Blog tag definitions
│   └── *.mdx                # Individual blog posts
│
├── docs/                    # Documentation pages (MDX files)
│   ├── intro.mdx            # Docs landing page
│   └── tutorial-*/          # Tutorial sections with _category_.json
│
├── src/
│   ├── components/          # React components
│   │   └── ComponentName/   # Each component in its own folder
│   │       ├── index.tsx    # Component implementation
│   │       └── styles.module.css
│   ├── css/
│   │   └── custom.css       # Global CSS overrides and theme variables
│   └── pages/               # Custom pages (React or MDX)
│       ├── index.tsx        # Homepage
│       └── *.mdx            # Additional pages
│
├── static/                  # Static assets (copied as-is to build)
│   └── img/                 # Images, favicon, social cards
│
├── docusaurus.config.ts     # Main site configuration
├── sidebars.ts              # Documentation sidebar structure
└── tsconfig.json            # TypeScript configuration
```

## Conventions

### Content Files
- Use `.mdx` extension for all content (docs, blog, pages)
- Blog posts: prefix with date `YYYY-MM-DD-title.mdx`
- Docs categories: use `_category_.json` for folder metadata

### Components
- One component per folder under `src/components/`
- Use CSS Modules (`styles.module.css`) for component styles
- Export component as default from `index.tsx`

### Imports
- Use `@site/` alias for project root imports
- Use `@theme/` alias for Docusaurus theme components

### Styling
- Prefer Infima utility classes when possible
- Use CSS custom properties for colors (supports dark mode)
- Component-specific styles in CSS Modules
