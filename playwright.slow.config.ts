import { defineConfig } from '@playwright/test';
import base from './playwright.config';

export default defineConfig({
  ...base,
  fullyParallel: false,
  workers: 1,
  timeout: 180000,
  use: {
    ...base.use,
    headless: false,
    launchOptions: { slowMo: 2000 },
  },
});
