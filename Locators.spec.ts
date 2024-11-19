import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{

  await page.goto('https://www.demoblaze.com/');

  //click on login button - property
  //await page.locator('id=login2').click();
  await page.click('id=login2');

  //provide username - CSS
  //await page.locator('#loginusername').fill("harsh");
  await page.fill('#loginusername','pavanol');
  //page.type('#loginusername','harsh');
  
  //provide password - CSS
  await page.fill("input[id='loginpassword']",'test@123');

  //click in login button - XPath
  await page.click("//button[normalize-space()='Log in']")

  //verify logout button
  const logoutlink=await page.locator(" (//a[normalize-space()='Log out'])")

  await expect(logoutlink).toBeVisible();
  await page.close();
})
