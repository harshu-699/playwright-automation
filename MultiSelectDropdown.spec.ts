import {test,expect} from '@playwright/test'

test ('DropDown',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//select multiple options from multi select drowdown
await page.selectOption('#colors',['Blue','Red','Green'])   //through array

//Assertion
//1)check number of options in dropdown
//const options=await page.locator('#colors option')
//await expect(options).toHaveCount(5)

//2)check number of options in dropdown using array
//const options=await page.$$('#colors option')
//console.log("Number of options:",options.length)
//await expect(options.length).toBe(5)

//3)check presence of value in dropdown
const options=await page.locator('#colors').textContent()
await expect(options?.includes('Blue')).toBeTruthy()
//await expect(options?.includes('Black')).toBeFalsy()

await page.waitForTimeout(3000)







})