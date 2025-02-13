import { Page } from '@playwright/test'; //Page – об'єкт Playwright

export class ProfilePage {
    private page: Page; //Приватне поле класу яке зберігатиме об'єкт Page

  constructor(page: Page) { //Конструктор класу приймає об'єкт Page
    this.page = page; //Зберігаємо переданий об'єкт у полі класу
  }

  async okButton() {
    await this.page.locator('button:has-text("OK")').click();
  }
  async addWaterButton() {
    await this.page.locator('button:has-text("Add Water")').click();
  }
  async increaseWaterCounter(){
    await this.page.locator('[data-testid="AddIcon"]').click();
  }
  async decreaseWaterCounter() {
    await this.page.locator('[data-testid="RemoveIcon"]').click();
  }
  async saveWaterButton() {
    await this.page.locator('button:has-text("Save")').click();
  }
  async delWaterButton() {
    await this.page.locator('.delete').nth(0).click();
  }
  async confirmDelWaterButton() {
    await this.page.locator('.confirm').click();
  }
};