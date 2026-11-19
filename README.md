# Waahan

Waahan is organized as a three-part application:

- `frontend/` - React, Vite, TypeScript, Tailwind CSS, and Framer Motion website.
- `backend/` - Reserved for the server application and APIs.
- `mobile/` - Reserved for the mobile application.

## Prerequisites

- Node.js 20 or newer
- npm

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Build and preview the production frontend:

```bash
cd frontend
npm run build
npm run preview
```

The generated frontend is written to `frontend/dist/`.

## Backend

The `backend/` folder is currently a placeholder. Add the backend framework and its own `package.json` or runtime configuration in this folder.

## Mobile

The `mobile/` folder is currently a placeholder. Add the mobile framework and platform files in this folder.

## Environment variables

Copy a checked-in example file into a local environment file in the relevant folder:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
cp mobile/.env.example mobile/.env
```

Never commit real credentials or secret values. `.env` files are ignored by the root `.gitignore`.

## Deployment

Deploy `frontend/dist/` to Vercel or Netlify using `frontend/` as the project root.

For Vercel:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

For Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

For the `waahan.in` domain, add the DNS records shown by the hosting provider and remove conflicting records for `@` or `www`.
