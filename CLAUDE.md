# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using the App Router architecture, bootstrapped with `create-next-app`. The project uses TypeScript, React 19, and Tailwind CSS v4 for styling.

## Development Commands

**Start development server:**
```bash
npm run dev
```
- Uses Next.js with Turbopack for fast refresh
- Server runs at http://localhost:3000
- Changes to files in `app/` directory auto-reload

**Build for production:**
```bash
npm run build
```
- Uses Turbopack for building
- Outputs to `.next/` directory

**Start production server:**
```bash
npm start
```
- Must run `npm run build` first

**Linting:**
```bash
npm run lint
```
- Uses ESLint with Next.js TypeScript configuration
- Extends `next/core-web-vitals` and `next/typescript`

## Architecture

**App Router Structure:**
- Uses Next.js App Router (not Pages Router)
- Entry point: `app/page.tsx` - home page component
- Root layout: `app/layout.tsx` - defines HTML structure, metadata, and global fonts
- Global styles: `app/globals.css` - Tailwind CSS configuration with CSS variables for theming

**TypeScript Configuration:**
- Path alias `@/*` maps to root directory for cleaner imports
- Example: `import Component from '@/components/Component'`
- Strict mode enabled
- Target: ES2017

**Styling:**
- Tailwind CSS v4 with inline theme configuration
- CSS variables for theming: `--background`, `--foreground`
- Automatic dark mode support via `prefers-color-scheme`
- Custom fonts: Geist Sans and Geist Mono loaded via `next/font/google`

**Key Conventions:**
- Server Components by default (no 'use client' needed unless client-side features required)
- Metadata exports in layouts/pages for SEO
- File-based routing: files in `app/` directory create routes automatically
