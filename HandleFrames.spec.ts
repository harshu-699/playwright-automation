import{test,expect} from '@playwright/test'

test('Handleframe',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const Allframe=await page.frames()
    console.log('Allframe.length')

    //Approach 1
    //const var=await page.frames('name)  //if name is present
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await frame1.fill("input[name='mytext1']",'Hello')

    //Approach 2
    const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await inputbox.fill('harsh')

await page.waitForTimeout(5000)

})