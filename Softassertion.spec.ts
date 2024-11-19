import{test,expect} from '@playwright/test'

test('Softassertion',async({page})=>{

await page.goto('https://www.demoblaze.com/')

//Hard Assertion
// await expect(page).toHaveTitle('STORE123')
// await expect(page).toHaveURL('https://www.demoblaze.com/')
// await expect(page.locator('.navbar-brand')).toBeVisible()

//soft Assertion
await expect.soft(page).toHaveTitle('STORE123');
await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})