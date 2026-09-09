import { test, expect } from '@playwright/test';

test('page has the expected heading and title', async ({ page }) => {
  await page.goto('data:text/html,<h1>Playwright Test</h1><title>Example page</title>');

  await expect(page).toHaveTitle('Example page');
  await expect(page.getByRole('heading', { name: 'Playwright Test' })).toBeVisible();
});