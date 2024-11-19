import {test,expect} from '@playwright/test'

test ('DropDown',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//multiple ways to select option from the dropdown
//await page.locator('#country').selectOption({label:'India'});  //label /visible text
//await page.locator('#country').selectOption('India');  //visible text
//await page.locator('#country').selectOption({value:'uk'});  //by using value
//await page.locator('#country').selectOption({index:1});  //by using index
//await page.selectOption('country','India');  //by text

//Assertion
//1)check number of option in dropdown - Approach1
// const options=await page.locator('#country option')
// await expect(options).toHaveCount(10)

//2)check number of option in dropdown - Approach2
//const options=await page.$$('#country option')
//console.log("Number of options:",options.length)
//await expect(options.length).toBe(10)

//3)check presence of value in the dropdown - Approach1
//const content=await page.locator('#country').textContent()
//await expect(content?.includes('India')).toBeTruthy

//4)check presence of value in the dropdown - Approach2
/*const options=await page.$$('#country option')
let status=false;

for(const option of options)
{
    //console.log(await option.textContent())
    let value=await option.textContent();
    if(value?.includes('France'))
    {
      status=true;
      break;
    }
}
    expect(status).toBeTruthy()
*/

//5)select option from dropdown using loop
    const options=await page.$$('#country option')
    
    for(const option of options)
    {
        let value=await option.textContent();
        if(value?.includes('France'))
        {
          await page.selectOption('#country',value)
          break;
        }
    }    


await page.waitForTimeout(3000)
})