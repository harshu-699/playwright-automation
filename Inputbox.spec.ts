import{test,expect} from '@playwright/test'

test('handle inputbox', async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form')

    //inputbox
    await expect(await page.locator('#firstName')).toBeVisible();

    await expect(await page.locator('#firstName')).toBeEmpty();

    await expect(await page.locator('#firstName')).toBeEditable();

    await expect(await page.locator('#firstName')).toBeEnabled();


    await page.fill('#firstName','harsh')

    await page.waitForTimeout(2000)
})