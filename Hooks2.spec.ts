import{test , expect} from '@playwright/test'

let page;

test.beforeAll(async ({browser})=>{

page=await browser.newPage();

    await page.goto('https://www.demoblaze.com/');
    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
   await page.locator("//button[normalize-space()='Log in']").click()
})

test.afterAll(async()=>{
    await page.locator('#logout2').click()
})

test('Home page',async()=>{
//Home page
const product=await page.$$('.hrefch')
await expect(product).toHaveLength(9)

})

test('Add product to cart', async()=>{
   //add product
   await page.click("//a[normalize-space()='Samsung galaxy s6']")
   await page.click("//a[normalize-space()='Add to cart']")

   page.on('dialog',async dialog=>{
   expect(dialog.message()).toContain('Product added.')
   await dialog.accept()
   })
})





