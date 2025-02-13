import { test, expect } from '@playwright/test';
import { StartPage } from '../pages/StartPage';

test.describe("Start Page tests", () => {
  test('Navigate to Start Page', async ({ page, baseURL }) => {
      const startPage = new StartPage(page); //Створюємо новий екземпляр класу StartPage
      if (!baseURL) {
        throw new Error('baseURL is not defined');
      }

      await startPage.navigateStartPage(baseURL);
      await expect(page.locator('text=Try tracker')).toBeVisible()
      await expect(page.locator('text=Sign in')).toBeVisible()
      await expect(page.locator('a.logoBox')).toHaveAttribute('href', '/WaterTrackerFrontend/');
  });
});