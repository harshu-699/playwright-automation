import{test,expect} from '@playwright/test'

test('handle inputbox', async({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form')

    //Radio button
    await page.locator("label[for='gender-radio-1']").check();
    await expect(await page.locator("label[for='gender-radio-1']")).toBeChecked()
    await expect(await page.locator("label[for='gender-radio-1']").isChecked()).toBeTruthy()  //male

    await expect(await page.locator("label[for='gender-radio-2']").isChecked()).toBeFalsy();  //female


    await page.waitForTimeout(2000)
})