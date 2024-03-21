const { test, expect } = require('@playwright/test');
const baseUrl = 'http://localhost:3000/';
test("verify all books link is visible", async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isVisible = await allBooksLink.isVisible();
    expect(isVisible).toBe(true);
});

test('verify login button is visible', async ({page}) =>{
    await page.goto(baseUrl);
    await page.waitForSelector('nav.navbar');
    const loginButton = await page.$('a[href="/login"]');
    const isVisible = await loginButton.isVisible();
    expect(isVisible).toBe(true);
});

test('verify register button is visible', async ({page}) =>{
    await page.goto(baseUrl);
    await page.waitForSelector('nav.navbar');
    const registerButton = await page.$('a[href="/register"]');
    const isVisible = await registerButton.isVisible();
    expect(isVisible).toBe(true);
});

test("verify all books link is visible after user is logged in", async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector('nav.navbar');

    await page.click('a[href="/login"]');
    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', '123456');
    await page.click('#login-form .button.submit');

    const allBooksLink = await page.$('#logoutBtn');
    const isVisible = await allBooksLink.isVisible();
    expect(isVisible).toBe(true);
});
