# Waahan Coming Soon

A responsive single-page Coming Soon website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel

1. Push the project to a Git repository.
2. Import the repository at https://vercel.com/new.
3. Use the framework preset `Vite`.
4. Set build command to `npm run build` and output directory to `dist`.
5. Deploy.

In Vercel project settings, add `waahan.in` and `www.waahan.in` as domains.

## Deploy to Netlify

1. Push the project to a Git repository.
2. Import the repository at https://app.netlify.com/start.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Deploy.

In Netlify domain management, add `waahan.in` and `www.waahan.in`.

## Point waahan.in

Add the DNS records shown by Vercel or Netlify in your domain registrar. Typically this means:

- An `A` record for `@` pointing to the host's provided IP, or an `ALIAS/ANAME` record for `@`
- A `CNAME` record for `www` pointing to the host's generated domain

Wait for DNS and TLS to finish provisioning. Remove conflicting records for `@` or `www` before adding the hosting records.

## Edit content

Update headline, sub-text, tagline, copyright, and social links in `src/siteConfig.ts`.
