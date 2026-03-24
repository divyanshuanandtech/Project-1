import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL(/google/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://google.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'About' }).click();

  // Expects page to have url.
  await expect(page).toHaveURL(/about.google/);
});
