# Tech Stack

## Framework
- Docusaurus 3.10.0 (static site generator)
- React 19
- TypeScript 6.0

## Key Dependencies
- `@docusaurus/preset-classic` - Standard Docusaurus preset with docs, blog, pages
- `@mdx-js/react` - MDX support for React components in markdown
- `clsx` - Utility for constructing className strings
- `prism-react-renderer` - Syntax highlighting

## Styling
- Infima CSS framework (bundled with Docusaurus)
- CSS Modules for component-scoped styles
- CSS custom properties for theming (light/dark mode)

## Build System
- Node.js >= 20.0 required
- npm for package management

## Common Commands

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Type checking
npm run typecheck

# Clear cache
npm run clear
```

## Deployment
- Hosted on Vercel (https://chaos-driven-development.vercel.app)
- Static build output in `build/` directory
