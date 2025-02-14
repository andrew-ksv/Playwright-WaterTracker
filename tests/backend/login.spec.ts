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

      const responseBody = await response.json();
        expect(responseBody).toBeTruthy();
        expect(responseBody).toHaveProperty('token');
        expect(responseBody).toHaveProperty('user');
        expect(responseBody.user).toHaveProperty('email', VALID_EMAIL);
    });
});

test.describe('Negative login tests', () => {
  test('Login with wrong email', async ({ request }) => {
    const wrongEmail: string = "wrongemail@example.com";
    const response = await request.post(`${BACKEND_URL}/auth/login`, {
      data: {
        email: wrongEmail,
        password: VALID_PASSWORD,
      },
    });

    expect(response.status()).toBe(401);

    const responseBody = await response.json();
      expect(responseBody).toBeTruthy();
      expect(responseBody).toHaveProperty('message');
  });

  test('Login with wrong password', async ({ request }) => {
    const wrongPassword: string = "Wrongpassword";
    const response = await request.post(`${BACKEND_URL}/auth/login`, {
      data: {
        email: VALID_EMAIL,
        password: wrongPassword,
      },
    });
  
    expect(response.status()).toBe(401);

    const responseBody = await response.json();
      expect(responseBody).toBeTruthy();
      expect(responseBody).toHaveProperty('message');
  });

  test('Login with missing password', async ({ request }) => {
    const response = await request.post(`${BACKEND_URL}/auth/login`, {
      data: {
        email: VALID_EMAIL,
        password: "",
      },
    });

    expect(response.status()).toBe(400);

    const responseBody = await response.json();
      expect(responseBody).toBeTruthy();
      expect(responseBody).toHaveProperty('message');
  });
});