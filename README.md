# Calli Wickes Photography

## Development

This project uses [pnpm](https://pnpm.io/) (pinned via `packageManager` in `package.json`).

### Getting Started

1. Install dependencies: `pnpm install`
2. Create a `.env.local` file (copy `.env.example` and fill in real values)
3. Start the dev server: `pnpm dev`
4. Before pushing a commit (to test for auto deployment): `pnpm build`
5. Push to `develop` and PR to `main`

### Scripts

- `pnpm dev` — start the local development server
- `pnpm build` — create a production build
- `pnpm start` — run the production build locally
- `pnpm lint` — run ESLint (`next lint`)
- `pnpm typecheck` — run TypeScript type checking (`tsc --noEmit`)
- `pnpm format:check` — check formatting with Prettier
- `pnpm prettier` — format the codebase with Prettier

### Other Notes

- When making a new page: Update app/sitemap.ts

## Environment variables

Create a `.env.local` file at the project root. See `.env.example` for a template.

| Variable             | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| `STRAPI_URL`         | Base URL of the Strapi CMS instance that serves site content. |
| `STRAPI_API_TOKEN`   | API token used to authenticate requests to Strapi.            |
| `SENDGRID_API_KEY`   | SendGrid API key used to send contact/email messages.         |
| `GMAIL_EMAIL`        | Gmail address used as a backup SMTP sender.                   |
| `GMAIL_APP_PASSWORD` | Gmail app password for the backup SMTP sender.                |
| `URL`                | Public base URL of the deployed site.                         |

### Currently unused

The following variables may appear in `.env.local` but are **not currently referenced** in the code:

- `GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_URL`
