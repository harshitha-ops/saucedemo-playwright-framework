# Saucedemo Playwright Framework

UI test automation framework built with **Playwright** and **TypeScript**, using the practice site [saucedemo.com](https://www.saucedemo.com). It uses the Page Object Model, Playwright fixtures, a separate test data layer, tagged suites, and a CI pipeline.

## Project structure

```
pages/        Page objects: locators and actions for each page
fixtures/     Playwright fixtures that inject page objects into tests
data/         Test data: users and expected messages
tests/        Test scenarios and assertions
.github/workflows/ci.yml   CI pipeline
playwright.config.ts       Base URL, retries, reporters, screenshots, video
```

## How it works

- **Page objects** keep locators and actions in one place, so a UI change means one fix.
- **Fixtures** hand each test a ready `loginPage` and `inventoryPage`, so tests contain no setup code.
- **Data layer** keeps users and expected error messages out of the tests.
- **Tags** label tests as `@smoke` or `@regression`, so each suite runs on its own.

## Test coverage

- **Smoke (2):** standard user can log in, inventory shows six products
- **Regression (6):** locked-out user, wrong password, empty username, add to cart, remove from cart, log out
- **On-demand (`@inception`):** light read-only checks against a public website, kept out of CI

## Run it locally

```
npm ci
npx playwright install chromium
npm run test:smoke
npm run test:regression
npx playwright show-report
```

Watch the browser: `npx playwright test --headed`

## CI pipeline (GitHub Actions)

- Runs on every push and pull request to `main`, and nightly
- **Smoke** runs first, and **regression** runs only if smoke passes
- Retries once on CI, with traces kept on the first retry
- HTML reports upload as artifacts on every run, including failures

## Tech

Playwright, TypeScript, Node.js, GitHub Actions
