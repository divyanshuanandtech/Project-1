// Example Playwright test file
import { test, expect } from '@playwright/test';

test('Sample test', async ({ page }) => {
  await page.goto('https://www.linkedin.com/');
  const signInButton = page.locator('a.nav__button-secondary', { hasText: 'Sign in' });
  await page.waitForTimeout(5000)
  await expect(signInButton).toBeVisible();
  console.log('Going to click on Sign In Button');
  await signInButton.click()
  await page.goBack();
  const joinInButton = page.locator('.nav__button-tertiary.btn-primary.btn-md', { hasText: 'Join now' });
  await expect(joinInButton).toBeVisible();
  console.log('Going to click on Join Button')
  await page.waitForTimeout(5000)
  await joinInButton.click();
  // await expect(page).toHaveTitle(/Example Domain/);
});
