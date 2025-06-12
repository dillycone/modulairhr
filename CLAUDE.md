# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `pnpm dev` - Start development server at http://localhost:3000
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint with strict mode (--max-warnings 0)
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format` - Format all code with Prettier
- `pnpm tsc --noEmit` - Run TypeScript type checking (alias: pnpm typecheck)

### Testing

- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once (for CI)
- `pnpm test:ui` - Open Vitest UI
- `pnpm test:coverage` - Generate test coverage report with @vitest/coverage-v8
- `pnpm test -- components/Hero.test.tsx` - Run a specific test file

## Architecture

### Next.js 15 App Router

- Using App Router with React Server Components by default
- Edge runtime enabled on root page for optimal performance
- Components in `app/` are server components unless marked with `'use client'`
- Dynamic imports used for lazy loading (e.g., Hero component)

### TypeScript Configuration

- Strict mode enabled with additional strictness:
  - `noUncheckedIndexedAccess`: true
  - `exactOptionalPropertyTypes`: true
- Absolute imports configured with `@/` prefix mapping to root
- Target ES2023 for modern JavaScript features

### Styling

- Tailwind CSS with dark mode support (class strategy)
- First-party plugins: typography, forms, aspect-ratio
- Components use utility classes directly

### Code Quality

- Pre-commit hooks via Husky run Prettier on staged files
- Prettier configured with:
  - No semicolons
  - Single quotes
  - Import sorting (React → Next.js → third-party → local)
  - Tailwind CSS class sorting via prettier-plugin-tailwindcss
- ESLint with Next.js recommended rules and Tailwind CSS plugin
- Automated dependency updates via Renovate (see .github/renovate.json)

### Testing

- Vitest for unit testing with React Testing Library
- Tests use jsdom environment
- Global test utilities available via vitest.setup.ts
- Tests located alongside components (e.g., `Hero.tsx` → `Hero.test.tsx`)
- Coverage reporting via @vitest/coverage-v8
- Next.js modules inlined for consistent test behavior

### CI/CD

- GitHub Actions workflow runs on push/PR to main
- CI pipeline: install → lint → format check → type check → test → build
- Uses pnpm with dependency caching for faster builds
- Next.js build cache enabled for improved CI performance

## Conventions

### File & Folder Naming

- **Folders**: kebab-case (e.g., `auth-form`, `user-profile`)
- **Components**: PascalCase (e.g., `Hero.tsx`, `AuthForm.tsx`)
- **Tests**: Component name + `.test.tsx` (e.g., `Hero.test.tsx`)

### Code Style Requirements

- All changes must pass `pnpm lint` and `pnpm format`
- TypeScript must compile without errors (`pnpm typecheck`)
- Commit messages should be concise and describe the change
- Keep commits small - one logical change per commit

### React & Next.js Patterns

- Default to React Server Components (no `'use client'`)
- Only add `'use client'` for interactive components
- Use dynamic imports for code splitting
- Prefer composition over inheritance
- See `.docs/nextjs.mdc` and `.docs/react.mdc` for detailed guidelines

### Development Guidelines

Framework-specific rules are documented in `.docs/`:

- `.docs/nextjs.mdc` - Next.js conventions and patterns
- `.docs/react.mdc` - React component patterns
- `.docs/tailwind.mdc` - Tailwind CSS usage
- `.docs/postgresql.mdc` - Database design patterns
