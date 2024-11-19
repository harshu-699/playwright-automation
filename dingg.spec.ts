import {test,expect} from '@playwright/test'


test('dingg',async({page})=>{

    await page.goto('https://stg.dingg.app/login');

    await page.locator("input[placeholder='Enter User Id']").click()
    await page.fill("input[placeholder='Enter User Id']","arsp");
    await page.click("input[placeholder='Enter Password']")
    await page.type("input[placeholder='Enter Password']","dingg");
    await page.click("button[name='signin']");
    // await page.click("//i[@class='fa fa-receipt']");
    // await page.getByPlaceholder('Search by Name/Mobile/Email/Code').click()
    // await page.getByPlaceholder('Search by Name/Mobile/Email/Code').fill('9922')
    // await page.getByRole('option',{name:'Santosh Patidar 9922243332'}).click()
    // await page.click("//div[@class='col-3']//input[@type='text']")
    // await page.click("div[aria-label='Wednesday, September 18, 2024']")
    // await page.click("//form//select//option[@value='322']")
    //await page.fill('id=typeahead-basic','9922');
    //await page.getByRole('button',{name: 'ADD NEW'}).click()
   // await page.getByRole('button',{name: 'Add Appointment'}).click()
    //await page.close();

    // const event=await page.locator("div[class=fc-event-main]").filter({hasText:'Santosh Patidar, TK05, 01:10 PM-01:40 PM, Normal Shaving (₹100)'})

    // await event.click({button:'right'})

    // get the count of options 
    const option=await page.$$("//a[@class=fc-event-main]")
    console.log(option)
    await expect(option).toHaveCount(7)
    const elementsCount = await option;
    console.log('SP', elementsCount)
    
    // get a random number between 1 to count
     let random=Math.floor(Math.random()*elementsCount);
     console.log(option.nth(random))
    // let value=await option.nth(random).textContent();
    // console.log(value);
    // option.nth(random).click({button:'right'})

    // await page.locator('a').filter({ hasText: 'Santosh Patidar, TK02, 12:45' }).click({
    //   button: 'right'
    // });
    // await page.getByRole('menuitem', { name: 'Copy Booking' }).click();
    // for(let options of option)
    // {
    //     let value=await options.textContent()
    //     if ( value == random)
    //     {
    //       await options.click()
    //       break;
    //     }
    // }


    await page.waitForTimeout(2000)

});