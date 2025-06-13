import {expect, test} from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('test booking table web-sait', async ({ page }) => {
  await page.goto('http://localhost:5174/bookTable');

  await page.getByTestId('tableItemE2E2').click();

  await page.getByPlaceholder('Имя').fill('Иван Иванов');
  await page.getByPlaceholder('Телефон').fill('+79123456789');
  await page.locator('input[type="date"]').fill('2025-07-25');
  await page.locator('input[type="time"]').fill('19:30');

  await page.getByRole('button', { name: 'Забронировать' }).click();

  await expect(page.getByTestId('tableItemE2E2').getByTestId('isOccupied')).toHaveText("Занят")
})
