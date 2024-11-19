import {test ,expect} from '@playwright/test'

test.skip('Alert with OK', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//enabling dialog window handling
page.on('dialog',async dialog=>{
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept();

})

await page.click('#alertBtn');
await page.waitForTimeout(5000)

});

test.skip('Confirmation Alert', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    //enabling dialog window handling
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept();  //close by using OK 
    //await dialog.dismiss();  //close by using Cancel
    
    })
    
    await page.click('#confirmBtn');
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)
    
    })

    test('prompt Alert', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')
        
        //enabling dialog window handling
        page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('harsh');  //close by using OK 
        //await dialog.dismiss();  //close by using Cancel
        
        })
        
        await page.click('#promptBtn');
        await expect(page.locator('#demo')).toHaveText('Hello harsh! How are you today?')
    
        await page.waitForTimeout(5000)
        
        })