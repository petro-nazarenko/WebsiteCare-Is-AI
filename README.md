# WebsiteCare-Is-AI

WebsiteCare is a platform that utilizes AI-driven technology to provide website maintenance and optimization services, ensuring accuracy, functionality, and user-friendliness.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm v10 or later

### Installation

```bash
npm install
```

### Environment variables

Copy the example file and fill in any values your setup requires:

```bash
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command                | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start the development server |
| `npm run build`        | Build for production         |
| `npm run start`        | Start the production server  |
| `npm run lint`         | Run ESLint                   |
| `npm run type-check`   | Run TypeScript type checking |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |

## Docker

Build and run the production image:

```bash
docker build -t websitecare .
docker run -p 3000:3000 websitecare
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) – React framework (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS
- [Prettier](https://prettier.io/) – Code formatter

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── loading.tsx   # Global loading state
│   ├── error.tsx     # Global error boundary
│   └── not-found.tsx # 404 page
├── components/       # Reusable UI components
└── lib/              # Shared utilities and helpers
```

## CI/CD

GitHub Actions runs on every push and pull request to `main`:

1. **Lint** – ESLint
2. **Format check** – Prettier
3. **Type check** – TypeScript (`tsc --noEmit`)
4. **Build** – Next.js production build
