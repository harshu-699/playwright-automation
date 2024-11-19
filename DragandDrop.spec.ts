import {test,expect} from '@playwright/test'

test('DragandDrop',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const drag=await page.locator("//div[@id='draggable']")
const drop=await page.locator("//div[@id='droppable']")


//Approach 1
// await drag.hover()
// await drag.mouse.down()

// await drop.hover()
// await drop.mouse.up()

//Approach 2
await drag.dragTo(drop)


await page.waitForTimeout(3000)

})