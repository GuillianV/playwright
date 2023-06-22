import { expect, test } from '@playwright/test';

test('login/correct', async ({ page }) => {
	await page.goto('/admin/login');
	await page.getByLabel('username').fill('gvv');
	await page.getByLabel('password').fill('gvv');
	await page.getByLabel('submit').click();
	await  expect(page).toHaveURL('/admin/home');
});


test('login/incorrect', async ({ page}) => {
	await page.goto('/admin/login');
	await page.getByLabel('username').fill('1234fd8v8vd89f56789');
	await page.getByLabel('password').fill('1234567898vv8fd52fd');
	const responsePromise =  page.waitForResponse(response => response.status() === 400);
    await page.getByLabel('submit').click()
	const response = await responsePromise;
	await expect(response.status()).toBe(400);
});
