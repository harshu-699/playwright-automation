import{test,expect} from '@playwright/test'

test('test', async({page})=>{
await page.goto('https://www.demoblaze.com/');
await page.click('id=login2');
await page.fill('#loginusername','pavanol');
await page.fill("input[id='loginpassword']",'test@123'); 
await page.click("//button[normalize-space()='Log in']")
await expect(page.locator('#logout2')).toBeVisible()

})