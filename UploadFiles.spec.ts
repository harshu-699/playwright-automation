import{test,expect} from '@playwright/test'

test('uploadfiles', async({page})=>{

    await page.goto('https://commitquality.com/practice-file-upload')

    
    const handle=await page.locator("//input[@id='file-input']")
    await handle.setInputFiles('C:/Users/Ayan/Playwright Automation/package-lock.json')


await page.waitForTimeout(3000)

})