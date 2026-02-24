# Contributing to GridCart Frontend

## Team Structure

| Team                      | Members      | Ownership                                        |
| ------------------------- | ------------ | ------------------------------------------------ |
| **Team A** — Store & Auth | 2 developers | Customer-facing storefront and authentication    |
| **Team B** — Admin Panel  | 3 developers | Admin dashboard, product/order/banner management |

---

## File Ownership Map

### Team A — Store & Auth (2 members)

These directories are **exclusively owned** by Team A. Work freely here.

```
src/features/auth/          # Login, signup, password reset
src/features/products/      # Product listing, detail, search
src/features/cart/          # Cart logic and components
src/features/checkout/      # Checkout flow
src/features/orders/        # Order history, tracking (customer side)
src/features/banners/       # Banner display (customer side)

src/app/(auth)/             # /login, /signup routes
src/app/(store)/            # /cart, /checkout, /wishlist, /products, etc.
src/app/page.tsx            # Homepage

src/store/useCartStore.ts   # Cart state
src/components/layout/      # Header, Footer, HomeSections
```

### Team B — Admin Panel (3 members)

These directories are **exclusively owned** by Team B. Work freely here.

```
src/features/admin/         # Admin dashboard components

src/app/(admin)/            # /dashboard, /products, /orders, /banners, /settings
src/app/(admin)/layout.tsx  # Admin sidebar + layout
```

### Shared Files — Require PR Review

> **Rule:** Any change to a shared file requires at least **1 approval from the other team** before merging.

| File                        | Purpose                                 |
| --------------------------- | --------------------------------------- |
| `src/app/layout.tsx`        | Root layout (Header/Footer wrapper)     |
| `src/app/globals.css`       | Theme tokens, global styles             |
| `src/app/providers.tsx`     | Context providers                       |
| `src/services/apiClient.ts` | Axios base instance                     |
| `src/store/useAuthStore.ts` | Auth state (used by both teams)         |
| `src/store/useUIStore.ts`   | UI state (modals, toasts)               |
| `src/components/ui/`        | Shared primitives (Button, Input, etc.) |
| `src/types/`                | Shared TypeScript interfaces            |
| `next.config.ts`            | Next.js configuration                   |
| `tailwind.config.ts`        | Tailwind theme config                   |

---

## Git Workflow

### Protected Branches

| Branch | Purpose                                            | Who can merge                               |
| ------ | -------------------------------------------------- | ------------------------------------------- |
| `main` | Production-ready code                              | **Team Lead only** (after testing on `dev`) |
| `dev`  | Integration branch — all features merge here first | Any member via approved PR                  |

> **Never push directly to `main` or `dev`.** Always create a feature branch and open a PR.

### Branch Naming Convention

```
feature/store-<feature-name>    # Team A — Store features
feature/auth-<feature-name>     # Team A — Auth features
feature/admin-<feature-name>    # Team B — Admin features
fix/<short-description>         # Either team — Bug fixes
hotfix/<short-description>      # Either team — Urgent production fixes
```

**Examples:**

```
feature/store-product-search
feature/auth-forgot-password
feature/admin-order-table
fix/cart-quantity-negative
hotfix/login-token-expired
```

### Step-by-Step: Creating a Branch & Working on It

#### 1. Always start from the latest `dev`

```bash
git checkout dev
git pull origin dev
```

#### 2. Create your feature branch

```bash
git checkout -b feature/store-product-search
```

#### 3. Work on your files — stay inside your team's directories

Make your changes, then stage and commit frequently:

```bash
git add src/features/products/components/SearchBar.tsx
git commit -m "feat(store): add product search bar component"
```

#### 4. Push your branch to remote

```bash
git push origin feature/store-product-search
```

#### 5. Open a Pull Request on GitHub

- **Base branch:** `dev` (NOT `main`)
- **Title:** `feat(store): product search with filters`
- **Description:** What you changed and why
- **Reviewers:** Tag your teammate (and the other team if you touched shared files)

#### 6. After PR is approved and merged, clean up

```bash
git checkout dev
git pull origin dev
git branch -d feature/store-product-search
```

### Keeping Your Branch Up-to-Date

If `dev` has been updated by others while you're working, **rebase** to avoid messy merge commits:

```bash
git checkout feature/store-product-search
git fetch origin
git rebase origin/dev
```

If there are conflicts during rebase:

1. Fix the conflicting files
2. `git add <fixed-files>`
3. `git rebase --continue`

### Pull Request Rules

1. **Feature branches** → merge into `dev` (never directly to `main`)
2. **Own directories** → 1 approval from your own team is enough
3. **Shared files** → requires 1 approval from **each** team
4. **Keep PRs small** — one feature per PR, avoid bundling unrelated changes
5. **Delete branch after merge** — keep the repo clean

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(store): add product search filter
feat(admin): create order management table
fix(auth): handle token refresh on 401
style(ui): update Button hover animation
refactor(cart): extract price calculation to utility
chore: update dependencies
```

**Commit message format:** `<type>(<scope>): <short description>`

| Type       | When to use                          |
| ---------- | ------------------------------------ |
| `feat`     | New feature or functionality         |
| `fix`      | Bug fix                              |
| `style`    | CSS, formatting, no logic change     |
| `refactor` | Code restructure, no behavior change |
| `chore`    | Dependencies, config, tooling        |
| `docs`     | Documentation only                   |

---

## Golden Rules — Read This First

### ✅ DO

- **Pull `dev` before creating a new branch** — always start fresh
- **Commit early, commit often** — small commits are easier to review and revert
- **Write descriptive commit messages** — your teammates will thank you
- **Keep PRs focused** — one feature = one PR, max ~300 lines changed
- **Test locally before pushing** — run `npm run dev` and check your page works
- **Communicate on shared files** — ping your teammates before editing shared files

### ❌ DON'T

- **Don't push to `main` or `dev` directly** — always use a PR
- **Don't edit files outside your team's ownership** — ask the other team first
- **Don't commit `node_modules/`, `.next/`, or `.env`** — these are in `.gitignore`
- **Don't force push (`git push -f`) on shared branches** — you'll overwrite others' work
- **Don't leave console.logs in your code** — clean up before opening a PR
- **Don't merge your own PR** — always get at least one review

---

## Handling Merge Conflicts

If you see a conflict, don't panic. Follow these steps:

### 1. Identify the conflict

```bash
git status
# Shows which files have conflicts
```

### 2. Open the conflicting file

You'll see markers like:

```
<<<<<<< HEAD
// Your code
=======
// Their code
>>>>>>> origin/dev
```

### 3. Choose the correct version

- If it's **your file** (inside your team's feature folder) → keep your version
- If it's a **shared file** → discuss with the other team member on a call
- **Never blindly accept one side** — read both and merge carefully

### 4. Mark as resolved and continue

```bash
git add <resolved-file>
git rebase --continue   # if rebasing
# OR
git commit              # if merging
```

---

## Adding a New Feature

Follow this pattern inside your team's feature folder:

```
src/features/<feature-name>/
├── components/     # UI components
│   └── MyComponent.tsx
├── hooks/          # Custom React hooks
│   └── useMyHook.ts
├── services/       # API calls
│   └── my.service.ts
├── types.ts        # TypeScript interfaces
└── index.ts        # Public exports
```

**Important:**

- Always export from `index.ts` so other modules import cleanly
- Add `"use client"` to any component that uses hooks, state, or event handlers
- Keep types in the feature's own `types.ts`, not in `src/types/` (unless shared)

---

## Adding a New Shared UI Component

If you need to add a reusable component to `src/components/ui/`:

1. Check if a similar component already exists
2. Create the component with a clear, generic API
3. Open a PR and tag **both teams** for review
4. Document props with JSDoc comments

---

## Quick Reference

| I want to...                    | Where do I work?                                       | PR approval needed from |
| ------------------------------- | ------------------------------------------------------ | ----------------------- |
| Build a product listing page    | `src/features/products/` + `src/app/(store)/products/` | Team A                  |
| Add admin order management      | `src/features/admin/` + `src/app/(admin)/orders/`      | Team B                  |
| Add a new shared Button variant | `src/components/ui/Button.tsx`                         | **Both teams**          |
| Update the auth login flow      | `src/features/auth/` + `src/app/(auth)/login/`         | Team A                  |
| Change the API base URL         | `src/services/apiClient.ts`                            | **Both teams**          |
| Add a new color token           | `src/app/globals.css`                                  | **Both teams**          |
