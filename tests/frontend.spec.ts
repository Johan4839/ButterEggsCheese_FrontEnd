import { test, expect } from '@playwright/test';

test('The user should see a start button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page.locator('button')).toContainText('Start')
});

test('When the user clicks the start button, the 3x3 grid should be shown', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the start button
  await page.getByText('Start').click();

  // Check if the 3x3 grid is displayed
  const gridCells = await page.$$('.grid-cell');
  expect(gridCells).toHaveLength(9);
});