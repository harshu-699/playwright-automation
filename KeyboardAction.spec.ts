import{test,expect} from '@playwright/test'

test('KeyboardAction', async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')


    await page.type('[name="text1"]', 'welcome to automation')

    //Ctrl + A
    await page.keyboard.press('Control+A')    //press  for multiple keys

    //Ctrl + C
    await page.keyboard.press('Control+C') 

    //Tab
    await page.keyboard.down('Tab')     //down for single key
    await page.keyboard.up('Tab')

    //Ctrl + v
     await page.keyboard.press('Control+V')
     
     
await page.waitForTimeout(5000)

})