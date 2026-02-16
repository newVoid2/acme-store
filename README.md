# ACME Store — React Practice E-Commerce (Vite)

> A learning project focused on understanding how a real e-commerce frontend works — not just making one that “looks right”.

This repository is part of my structured path toward building production-level full-stack applications (Next.js / Node / Databases).  
The goal here is to **understand the mechanics first**, not rely on frameworks that hide them.

---

## Purpose of This Project

Most tutorials teach React by assembling components until the UI works.

This project exists to understand:

- state flow across a real application
- cart logic and persistence
- component boundaries
- data modeling for products
- rendering performance patterns
- why frameworks like Next.js exist (by first building without them)

This is intentionally built with **Vite + React only** so the behavior of the app is visible and learnable.

---

## Current Status

**Learning Sandbox — Not Production Ready**

This repo will change often as concepts are learned and rewritten properly.

You may see:
- refactors
- deleted features
- rewritten state management
- experimental patterns

That is expected.

---

## Tech Stack

Frontend
- React
- Vite
- JavaScript (will migrate to TypeScript later)
- CSS (learning phase — minimal abstraction)

Concepts Practiced
- component architecture
- state lifting vs local state
- cart synchronization
- derived state
- prop drilling problems
- reusable UI patterns
- future migration thinking (how this would map to Next.js)

---

## What I'm Practicing Here

### 1. Store Architecture
How an online store actually behaves internally:
- product list
- product detail
- cart system
- quantity updates
- removing items
- total calculation

### 2. State Reasoning
Understanding *where state should live* instead of using global tools too early.

### 3. Preparing for Full Stack
This project will later translate into:
- Next.js storefront
- Shopify / API backend
- authentication
- payments

So the goal is not just UI — it is mental modeling.

---

## What This Project Is NOT

- Not optimized
- Not styled professionally
- Not secure
- Not scalable

This is the **foundation stage**.

Skipping this stage leads to developers who can use frameworks but cannot debug them.

---

## How To Run

```bash
git clone https://github.com/newVoid2/acme-store
cd acme-store
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## Roadmap

Planned evolution of this repo:

1. Clean component boundaries
2. Convert to TypeScript
3. Introduce better state handling patterns
4. Move concepts into Next.js
5. Connect to real backend
6. Production store architecture

---

## Why Vite Instead of Next.js (for now)

Next.js solves problems you first need to understand.

This project answers:
> *What problems is Next.js actually solving?*

After this, I will rebuild the store properly using a full-stack architecture.

---

## Author Notes

This repository represents learning, not showcasing perfection.

The goal is long-term engineering skill, not tutorial completion.
