import { expect, test } from '@playwright/test';

test('register/correct', async ({ page }) => {


	var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var result = ""
	var chaactersLength = characters.length;

	for ( var i = 0; i < 5 ; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * chaactersLength));
	}


	await page.goto('/admin/register');
	await page.getByLabel('username').fill(result);
	await page.getByLabel('password').fill(result);
	await page.getByLabel('submit').click();
	await  expect(page).toHaveURL('/admin/login');
});


test('register/incorrect', async ({ page}) => {
	await page.goto('/admin/register');
	await page.getByLabel('username').fill('gvv');
	await page.getByLabel('password').fill('gvv');
	const responsePromise =  page.waitForResponse(response => response.status() === 400);
    await page.getByLabel('submit').click()
	const response = await responsePromise;
	await expect(response.status()).toBe(400);
});
