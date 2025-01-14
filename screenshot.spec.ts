import {test,expect} from '@playwright/test'

test('Page screenshot',async({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests\Screenshots'+Date.now()+'HomePage.png'})
})

test('Full page screenshot',async({page})=>{
 await page.goto('https://demo.opencart.com/')
await page.screenshot({path:'tests\Screenshots'+Date.now()+'FullPage.png',fullPage:true})
})

test.only('Element screenshot',async({page})=>{
await page.goto('https://demo.opencart.com/')
await page.locator("(//div[@class='product-thumb'])[1]").screenshot({path:'tests\Screenshots'+Date.now()+'Macbook.png'})   
})