import {test ,expect} from '@playwright/test'

test('DatePicker', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//await page.fill('#datepicker','10/02/2024')

//date picker
const year="2021";
const month="March";
const date="10";

await page.click('#datepicker')  //open calender

while(true)
{
    const currentyear=await page.locator("//span[@class='ui-datepicker-year']").textContent()
    const currentmonth=await page.locator("//span[@class='ui-datepicker-month']").textContent()

    if(currentyear == year && currentmonth == month)
    {
        break;
    }
    //await page.locator("//a[@title='Next']").click()   //next
    await page.locator("//a[@title='Prev']").click()
}

const dates=await page.$$("//a[@class='ui-state-default']")

//date selection using loop
/*for(const dt of dates)
{
    if(await dt.textContent()==date)
    {
        await dt.click()
        break;
    }
}*/

//date seletion without loop
await page.click(`//a[@class='ui-state-default'][text()='${date}']`)   //parameterize


await page.waitForTimeout(3000)

})