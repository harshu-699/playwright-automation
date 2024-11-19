import {test ,expect} from '@playwright/test'

test('Table', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table=await page.locator("//table[@id='productTable']")

//total number of rows & column
const column=await page.locator('thead tr th')
console.log('Number of column:',await column.count())  //4
await expect(await column.count()).toBe(4)

const rows=await page.locator("//table[@id='productTable']/tbody/tr")
console.log('Number of rows:',await rows.count())  //5
await expect(await rows.count()).toBe(5)

//select checkbox for product 4
// const matchedrow=await row.filter({has: page.locator('td'),hasText:'Smartwatch'})
// await matchedrow.locator('input').check()

//3)select multiple products by re-usable function
// await selectProduct(rows, page, 'Smartphone')
// await selectProduct(rows, page, 'Smartwatch')
// await selectProduct(rows, page, 'Tablet')

//4)print all product detail using loop
/*for(let i=0;i<await rows.count();i++)
{
    const row=rows.nth(i)
    const tds=row.locator('td')

    for(let j=0;j<await tds.count()-1;j++)
    {
    console.log(await tds.nth(j).textContent())
    }
}*/

//5)Read data from all the pages in the table
const pages=await page.locator('.pagination li a')
console.log('Number of pages:',await pages.count())

for(let p=0; p<await pages.count(); p++)
{
    if(p>0)
    {
        await pages.nth(p).click()
    }
    for(let i=0;i<await rows.count();i++)
        {
            const row=rows.nth(i)
            const tds=row.locator('td')
        
            for(let j=0;j<await tds.count()-1;j++)
            {
            console.log(await tds.nth(j).textContent())
            }
        }
    await page.waitForTimeout(3000)
}

await page.waitForTimeout(5000)

})

async function selectProduct(row, page, name)
{
    const matchedrow=await row.filter({has: page.locator('td'),hasText: name})
    await matchedrow.locator('input').check()
      
}