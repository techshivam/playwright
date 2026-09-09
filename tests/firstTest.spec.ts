//Test could run only once on new machine/IP, as google system will detect the machine requests and interupt the flow with the Check!
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).click();
  await page.getByRole('combobox', { name: 'Suche' }).fill('playwright');
  await page.getByRole('combobox', { name: 'Suche' }).press('Enter');
  //await page.keyboard.press('Enter');
  //await page.getByText('playwright', { exact: true }).click();
  //await page.goto('https://www.google.com/search?q=playwright&sca_esv=444dee17e46a57e2&sxsrf=APpeQnu0DmqY7cKc_Be7EloYBCNkjRP_vg%3A1788947476870&source=hp&ei=FCyhatiCNOaL7NYP8LSJyAY&iflsig=ABILxe8AAAAAaqE6JK5wjN78yyXTnVLkhUQdHbvj4kHo&ved=0ahUKEwjY3ITXnOGWAxXmBdsEHXBaAmkQ4dUDCBs&uact=5&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEj8Q1DvD1iLIXABeACQAQCYATSgAcEDqgECMTC4AQPIAQD4AQGYAgugAuoDqAIKwgIKEC4YAxiPARjqAsICChAAGAMYjwEY6gLCAgsQLhiABBixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgIOEAAYgAQYigUYsQMYgwHCAgsQABiABBixAxiDAcICCBAuGIAEGLEDwgIFEC4YgATCAgsQLhiABBjHARivAcICERAuGIAEGLEDGIMBGMcBGNEDmAMH8QUXVMh4XrzMwZIHAjExoAeJP7IHAjEwuAfiA8IHBTAuOC4zyAcdgAgB&sclient=gws-wiz&sei=NCyhasaRMOKVxc8PuPv1iQ4');
  //await page.getByRole('link', { name: 'Playwright: Fast and reliable end-to-end testing for modern ... Playwright' }).click();
  //await expect(page.locator('h1')).toContainText('Playwright');
  //await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  //await page.getByRole('heading', { name: 'Playwright CLI' }).click();
});