# CLAUDE Guidelines for `modulairhr`

These instructions tell any coding LLM (Claude Code, ChatGPT, etc.) **how to work in this repository**.
Follow them **before** writing code or configuration changes.

---

## 1. Tech Stack & Key Tools

| Area            | Version / Rule                                  |
| --------------- | ----------------------------------------------- |
| Next.js         | 15.x — App Router only (no `pages` folder)      |
| React           | 19.x — Functional Components + Hooks            |
| TypeScript      | 5.x — `strict: true`, `target: "ES2022"`        |
| Tailwind CSS    | 3.x — directives in `globals.css`; use standard utilities only |
| ESLint          | `next/core-web-vitals`, `@typescript-eslint/recommended`, `plugin:prettier/recommended` |
| Prettier        | `.prettierrc.json` controls all formatting; **never** add style rules in ESLint |
| Testing         | Vitest (`pnpm test`) with global env            |
| Docs            | `.docs/*.mdc` — *outside* Tailwind `content` globs |
| Public assets   | `/public` (tracked via `.gitkeep`)              |

---

## 2. Golden Rules for Code Changes

1. **Type Safety:**
   • Use TypeScript everywhere (`.ts` / `.tsx`).
   • No `any` unless absolutely unavoidable—then document why.

2. **Component Patterns:**
   • Export **named** functional components.
   • If the component requires interactivity, start the file with `'use client'`.
   • All interactive "primitive" UI elements (buttons, inputs, etc.) **must** use `React.forwardRef` and set `displayName`.

3. **Styling & Tailwind:**
   • Global directives live in `app/globals.css` — do **not** `@import "tailwindcss"`.
   • Re-use extracted component classes (e.g. `.btn-base`). Add new component-layer utilities under `@layer components`.
   • Use standard Tailwind CSS v3 utilities only (e.g., `w-4 h-4` not `size-4`).
   • Merge class strings with our helper: `cn()` from `lib/utils.ts`.

4. **Formatting & Linting:**
   • Run `pnpm format` before committing.
   • No ESLint formatting overrides—Prettier owns whitespace, quotes, semicolons, etc.
   • CI will fail on `pnpm lint` or `pnpm test` errors.

5. **File / Folder Conventions:**
   • Use **kebab-case** directory names, **PascalCase** file names for components.
   • Keep new docs in `.docs`; do *not* place `.md` or `.mdc` anywhere else.
   • Place images, favicons, OG tags in `/public`.

6. **Dependencies:**
   • Prefer lightweight, tree-shakeable packages.
   • Always add with `pnpm add <pkg>` (runtime) or `pnpm add -D <pkg>` (dev).
   • After adding, update `README.md` and, if needed, `vitest.config.ts` alias paths.

7. **Testing:**
   • For new helpers or complex UI logic, add a matching test in `tests/`.
   • Use Vitest’s global API (`describe`, `it`, `expect`).
   • Snapshot tests are acceptable for simple UI output.

8. **Commit Messages & PRs:**
   • Use Conventional Commits (`feat:`, `fix:`, `docs:`, etc.).
   • Each PR should pass **dev**, **build**, **lint**, and **test** scripts.

---

## 3. Allowed Config Edits

• **Tailwind:** only adjust `tailwind.config.js` `content`, `theme`, and plugin arrays.
• **Next.js:** Next.js 15.x removes deprecated options like `swcMinify`.
• **ESLint / Prettier:** never duplicate formatting rules—extend existing configs.
• **Vitest:** keep tests fast; avoid hitting external resources.

---

## 4. Common Snippets

### New Component Skeleton

```tsx
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function ExampleCard(
  props: React.ComponentPropsWithoutRef<'div'>,
) {
  return (
    <div
      {...props}
      className={cn(
        'rounded-lg border p-4 shadow-sm',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
```

### Extend Tailwind Component Layer

```css
@layer components {
  .badge {
    @apply inline-flex items-center rounded-md bg-gray-200 px-2 py-0.5 text-xs font-semibold;
  }
}
```

### Add a Vitest Test

```ts
import { describe, it, expect } from 'vitest';
import { myUtil } from '@/lib/my-util';

describe('myUtil', () => {
  it('works', () => {
    expect(myUtil(2)).toBe(4);
  });
});
```

---

## 5. When in Doubt

1. Search the codebase for existing patterns.
2. Re-read this file.
3. Open a draft PR and run the full script set.
4. Ask—in comments—*before* introducing a heavy dependency or breaking change.

Happy coding 🚀