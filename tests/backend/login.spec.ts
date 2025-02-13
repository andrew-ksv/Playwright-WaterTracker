import { test, expect } from '@playwright/test';
import { VALID_EMAIL, VALID_PASSWORD, BACKEND_URL } from '../../playwright.config';

test.describe('Positive login test', () => {
    test('Login with valid data', async ({ request }) => {
      const response = await request.post(`${BACKEND_URL}/auth/login`, {
        data: {
          email: VALID_EMAIL,
          password: VALID_PASSWORD,
        },
      });
  
      expect(response.status()).toBe(200);
    });
});