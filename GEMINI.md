# Lambo Landing Page - Gemini CLI Guidelines

This document provides foundational mandates and architectural context for AI agents working on the Lambo landing page project.

## Project Overview
A modern, high-performance landing page for the Lambo Master-Slave automation suite. Built with **Vite**, **React (TS)**, and **Tailwind CSS 4.0**.

## Technical Stack & Architecture
- **Framework:** React 19 (TypeScript)
- **Styling:** Tailwind CSS 4.0 (using `@tailwindcss/vite` plugin).
- **Theme:** Indigo-based color scheme (`indigo-600` primary).
- **Data Fetching:** Native `fetch` API for GitHub Release integration (`fshangala/lambo`).
- **Assets:** Screenshots and icons are served from the `/public` directory.

## Core Mandates

### 1. Styling Standards (Tailwind 4.0)
- **Directives:** Use `@import "tailwindcss";` in `src/index.css`.
- **Theme Configuration:** All theme overrides (colors, spacing) MUST be defined within the `@theme` block in `src/index.css`.
- **Utility-First:** Prefer Tailwind utility classes over custom CSS.
- **Responsiveness:** Maintain the "Mobile-First" approach currently implemented in `App.tsx`.

### 2. GitHub API Integration
- **Endpoint:** Always use `https://api.github.com/repos/fshangala/lambo/releases/latest`.
- **Asset Mapping:**
    - `lambo_server.exe` -> PC Server Download.
    - `app-release.apk` -> Mobile App Download.
- **Error Handling:** Always provide a fallback link to the GitHub releases page if the fetch fails.

### 3. Visual Consistency
- **Primary Color:** Indigo (`#4f46e5`).
- **Components:** Maintain the rounded corner aesthetic (`rounded-3xl` for cards, `rounded-[48px]` for large sections).
- **Icons:** Use inline SVGs for performance and styling flexibility.

### 4. Development Workflow
- **Build Verification:** Always run `npm run build` after changes to ensure Tailwind 4.0 and TypeScript types are correctly resolved.
- **Asset Integrity:** Verify that any new images are added to `/public` and referenced with absolute paths (e.g., `/new-image.png`).

## Contact Information
- **Author:** fshangala
- **WhatsApp:** +260974836436
- **GitHub:** [fshangala](https://github.com/fshangala)
- **LinkedIn:** [fshangala](https://linkedin.com/in/fshangala)
- **Website:** [fshangala.github.io/profile](https://fshangala.github.io/profile)
