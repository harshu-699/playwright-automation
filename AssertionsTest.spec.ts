const {test,expect} = require('@playwright/test')

test('AssertionTest',async({page})=>{

 //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//  //1) expect(page).toHavaURL()
//  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//  //2) expect(page).toHaveTitle()
//  await expect(page).toHaveTitle('OrangeHRM')

//  //3) expect (locator).toBeVisible()
//  const LogoElement=await page.locator("img[alt='company-branding']")
//  await expect(LogoElement).toBeVisible()

//  //4) expect (locator).toBeEnabled
//  const inputbox=await page.locator("input[placeholder='Username']")
//  await expect(inputbox).toBeEnabled()

 //5) expect (locator).toBeChecked()
//  await page.goto('https://stg.dingg.app/login?returnUrl=%2Fcalendar')
//  const mobileno=await page.locator("label[for='inlineRadio1']")
//  await mobileno.click()  //select radio button
//  await expect(mobileno).toBeChecked()

//  //6) expect (locator).toHaveAttribute
//  const signin=await page.locator("button[name='signin']")
//  await expect(signin).toHaveAttribute('type','submit')

 //7) expect (locator).toHaveText()
// await expect(await page.locator('.orangehrm-login-slot h5')).toHaveText('Login')  //full text

// //8) expect (locator).toHaveContain()
// await expect(await page.locator('.orangehrm-login-slot h5')).toContainText('Log')  //partial text

// //9) expect (locator).toHaveValue()
// const input=await page.locator("input[placeholder='Username']")
// await input.fill('harsh')
// await expect(input).toHaveValue('harsh')

//10) expect(locator).toHaveCount
await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
const options=await page.locator("select[name='DateOfBirthDay'] option")
await expect(options).toHaveCount(32)
})