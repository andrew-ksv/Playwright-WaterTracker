import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { VALID_EMAIL, VALID_PASSWORD } from '../../playwright.config';

test.describe("Login Page tests", () => {
  test('Positive login test', async ({ page, baseURL}) => {
      const loginPage = new LoginPage(page); //Створюємо новий екземпляр класу HomePage
      if (!baseURL) {
        throw new Error('baseURL is not defined');
      }
      if (!VALID_EMAIL || !VALID_PASSWORD) {
        throw new Error('Email or password is not defined in the configuration.');
      }
      
      await loginPage.navigateLoginPage(`${baseURL}/signin`);
      await loginPage.fillEmail(VALID_EMAIL);
      await loginPage.fillPassword(VALID_PASSWORD);

      //Перевірка введеного email
      await expect(page.locator('input[name="email"]')).toHaveValue(VALID_EMAIL);
      //Перевірка введеного пароля
      await expect(page.locator('input[name="password"]')).toHaveValue(VALID_PASSWORD);

      await loginPage.submit();
  });
});