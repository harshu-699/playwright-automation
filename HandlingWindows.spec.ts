import{test,expect,chromium} from '@playwright/test'

test('HandlingWindows', async()=>{

const browser=await chromium.launch();
const context=await browser.newContext();

const page1=await context.newPage()
const page2=await context.newPage()

const allPages=context.pages()
console.log('No of pages created:',allPages.length)

await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page1).toHaveTitle('OrangeHRM')

await page2.goto('https://www.orangehrm.com/')
await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM')

})

test.only('Handling multiple Windows', async()=>{

    const browser=await chromium.launch();
    const context=await browser.newContext();
    
    const page1=await context.newPage()
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')
    
    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newpage=await pagePromise;
    await expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM')

    await page1.waitForTimeout(3000)
    await newpage.waitForTimeout(3000)

    await browser.close()
    })