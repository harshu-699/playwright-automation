import{test ,expect} from '@playwright/test'

test('CheckBox', async({page})=>{

await page.goto('https://demoqa.com/automation-practice-form')

//single checkbox
await page.locator("label[for='hobbies-checkbox-1']").check()
expect(await page.locator("label[for='hobbies-checkbox-1']")).toBeChecked()
expect(await page.locator("label[for='hobbies-checkbox-1']").isChecked()).toBeTruthy()
expect(await page.locator("label[for='hobbies-checkbox-2']").isChecked()).toBeFalsy()

//multiple checkbox
const checkbox=[
                "label[for='hobbies-checkbox-1']",
                "label[for='hobbies-checkbox-2']"
               ]
 for(const locator of checkbox)  //select multiple checkbox
    {
        await page.locator(locator).check();
    }              

    await page.waitForTimeout(3000)

    for(const locator of checkbox)  //unselect multiple checkbox which are already selected
    {
        if(await page.locator(locator).isChecked())
        {
        await page.locator(locator).uncheck();
        }
    }              

await page.waitForTimeout(3000)

})