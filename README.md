# SauceDemo Playwright Framework

UI test automation framework built with Playwright and TypeScript, using the Page Object Model and GitHub Actions for CI.

**Application under test:** https://www.saucedemo.com (a public practice site)

## Tech stack
- Playwright Test
- TypeScript
- GitHub Actions

## Project structure
- `pages/` page objects (LoginPage, InventoryPage)
- `tests/` test specs
- `playwright.config.ts` test configuration
- `.github/workflows/` CI pipeline

## Run locally
    npm install
    npx playwright install
    npx playwright test
    npx playwright show-report

## Roadmap
- [x] Project setup and CI
- [x] Page Object Model
- [ ] More test scenarios (sorting, cart, checkout)
- [ ] Fixtures and test data
- [ ] Multi-environment config
- [ ] Published HTML reports
- [ ] Parallel and cross-browser runs
