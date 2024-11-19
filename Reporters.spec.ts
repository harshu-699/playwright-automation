import{test,expect} from '@playwright/test'

test('test1',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await expect(page).toHaveTitle('Automation Testing Practice')
})

test('test2',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page).toHaveTitle('OrangeHRM')
})

test('test3',async({page})=>{
await page.goto('https://demoqa.com/automation-practice-form')
await expect(page).toHaveTitle('DEMOQA')
})