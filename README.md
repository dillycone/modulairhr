# ModulairHR

Modern performance management platform built with Next.js 15 App Router.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS with first-party plugins
- **Language:** TypeScript (strict mode)
- **Package Manager:** pnpm
- **CI/CD:** GitHub Actions

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint with strict mode
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:coverage` - Generate test coverage report

## Features

- ✅ Dark mode support (`class` strategy)
- ✅ Strict TypeScript configuration
- ✅ Pre-commit hooks with Prettier
- ✅ Edge runtime optimized
- ✅ Lazy-loaded components
- ✅ CI/CD pipeline

## Development

Pre-commit hooks ensure code quality with automatic Prettier formatting.

---

Built with [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).
