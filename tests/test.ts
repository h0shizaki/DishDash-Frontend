import { expect, test } from '@playwright/test';

test('landing page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Hello world!' })).toBeVisible();
});


test('Enable to go to login', async ({ page }) => {
	await page.goto('/login');
	// await page.click("#submit")

	await page.type("#username", "username")
	await page.type("#password", "password")
});

