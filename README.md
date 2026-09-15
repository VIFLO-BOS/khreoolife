# Khreeolife — Next.js + Tailwind CSS + TypeScript

A native Next.js App Router implementation of the approved Khreeolife website.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion for interface and scroll animation
- Lucide React for precise purple mega-menu icons
- `next/image` for responsive image delivery

## Important implementation note

This codebase was authored as React/TypeScript components from scratch. It does **not** embed or convert the former HTML prototype:

- no `.html` page fragments
- no raw `.js` interaction files
- no `dangerouslySetInnerHTML`
- every route is a native `page.tsx`
- all interactive behaviour is implemented in typed client components

## Routes

- `/` — approved homepage
- `/projects`
- `/events`
- `/get-involved`
- `/blog`
- `/about`
- `/donate`

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Production check:

```bash
npm run typecheck
npm run build
npm start
```

## Project structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  projects/page.tsx
  events/page.tsx
  get-involved/page.tsx
  blog/page.tsx
  about/page.tsx
  donate/page.tsx
components/
  layout/
  ui/
  home/
  projects/
  events/
  forms/
  blog/
  donate/
data/site.ts
lib/cn.ts
```

## Content rules followed

The site content is based on the supplied Khreeolife brand presentation and website architecture. The current architecture identifies:

- Three pillars: Community Development, Education, Christian Missions
- Projects: Iloba Outreach; Help 20 Students Get Into Uni; Sharing The Ultimate Love Story; Ibadan Mission Outreach
- Event archive tied to those projects
- Volunteer and Sponsor V1 forms
- Magazine categories: Devotionals, Community Stories, Updates, Events Coverage
- Team: Olabiwonninu Temiloluwa and Alimi AbdulWasiu
- Online donation payment processing as future scope

Representative documentary photography is used for the prototype. Replace it with final Khreeolife outreach photography before launch.

## Forms and payments

The forms intentionally demonstrate the front-end V1 experience only. They are not connected to a backend. Donation payment processing is also not connected because the supplied architecture places it in future scope.
