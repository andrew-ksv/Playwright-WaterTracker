import { test, expect } from '@playwright/test';
import { VALID_EMAIL, VALID_PASSWORD, BACKEND_URL } from '../../playwright.config';

test.describe('Get user profile tests', () => {
    let token: string;
    test.beforeAll(async ({ request }) => {
        const response = await request.post(`${BACKEND_URL}/auth/login`, {
            data: {
                email: VALID_EMAIL,
                password: VALID_PASSWORD,
            },
        });

        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        token = responseBody.token;
    });

    test('Get profile. Positive test', async ({ request }) => {
        const response = await request.get(`${BACKEND_URL}/user/current`, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
          expect(responseBody).toBeTruthy();
          expect(responseBody).toHaveProperty('_id');
          expect(responseBody).toHaveProperty('name');
          expect(responseBody).toHaveProperty('email', VALID_EMAIL);
    });

    test('Get profile with invalid token. Negative test', async ({ request }) => {
        const response = await request.get(`${BACKEND_URL}/user/current`, {
            headers: {
                Authorization: 'invalidtoken', 
            },
        });
        expect(response.status()).toBe(401);

        const responseBody = await response.json();
          expect(responseBody).toBeTruthy();
          expect(responseBody).toHaveProperty('message');
    });
});