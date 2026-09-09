# Playwright Test Automation

Basic Playwright Test automation framework using TypeScript.

## Prerequisites

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
npx playwright install
```

## Run tests

```bash
npm test
```

Useful commands:

```bash
npm run test:headed  # Run with a visible browser
npm run test:ui      # Open Playwright UI mode
npm run report       # Open the latest HTML report
```

Tests live in `tests/`. Playwright stores screenshots, videos, traces, and the
HTML report in ignored output directories when a test fails or a report is
generated.
