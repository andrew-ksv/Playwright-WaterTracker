import { test } from "@playwright/test";
import { ProfilePage } from '../pages/ProfilePage';
import { auth } from "../utils/auth";
import { VALID_EMAIL, VALID_PASSWORD } from '../../playwright.config';

test.describe("Profile Page tests", () => {
  test('User profile tests', async ({ page, baseURL }) => {
      const profilePage = new ProfilePage(page);
      if (!baseURL) {
        throw new Error('baseURL is not defined');
      }
      if (!VALID_EMAIL || !VALID_PASSWORD) {
        throw new Error('Email or password is not defined in the configuration.');
      }
      await page.goto(`${baseURL}/signin`);

      await auth(page, VALID_EMAIL, VALID_PASSWORD);
      await page.waitForURL(`${baseURL}/home`); // Перевіряємо, що авторизація пройшла успішно
      await page.waitForSelector("text=Login successful. Welcome!");
      await profilePage.okButton();
      await profilePage.addWaterButton();
      await profilePage.increaseWaterCounter();
      await profilePage.decreaseWaterCounter();
      await profilePage.saveWaterButton();
      await profilePage.okButton();
      await profilePage.delWaterButton();
      await profilePage.confirmDelWaterButton();
      await profilePage.okButton();
  });
});