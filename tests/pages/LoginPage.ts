import { Page } from '@playwright/test'; //Page – об'єкт Playwright

export class LoginPage {
    private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  
  async navigateLoginPage(url: string) {
    await this.page.goto(url);
  }
  async fillEmail(email: string) {
    await this.page.fill('input[name="email"]', email);
  }
  async fillPassword(password: string) {
    await this.page.fill('input[name="password"]', password);
  }
  async submit() {
    await this.page.click('button[type="submit"]');
  }
};