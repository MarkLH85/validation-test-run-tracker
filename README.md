# Validation Test Run Tracker

A small web application for validation technicians: start a test run for a
software build on a device, record pass, fail or blocked against a seeded list
of test cases, complete the run only when every case is recorded, and see a
pass-rate summary per run and per build.

Based on the kind of test-run and results workflow I worked in as a validation
technician. All data is synthetic and no employer information is included.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · PostgreSQL (planned) ·
Vercel · GitHub Actions CI

## Status

Week 1: deployed shell under CI. Database, API routes, business rules and
tests follow in later phases.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## License

[MIT](./LICENSE)
