import { Page } from '@playwright/test'; //Page – об'єкт Playwright

export class StartPage {
    private page: Page; //Приватне поле класу яке зберігатиме об'єкт Page

  constructor(page: Page) { //Конструктор класу приймає об'єкт Page
    this.page = page; //Зберігаємо переданий об'єкт у полі класу
  }

  async navigateStartPage(url: string) {
      await this.page.goto(url); //page є частиною поточного класу
  }
};