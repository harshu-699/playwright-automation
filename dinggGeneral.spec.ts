import {test,expect} from '@playwright/test'
import { DinggLogin } from '../pages/DinggLogin'
import { general } from '../pages/General'
import { Edit } from '../pages/Edit'
import { InvoiceEdit } from '../pages/invoiceEdit'
import { CreateNew } from '../pages/createNew'

test.beforeEach('Login',async({page})=>{
    //login 
    const login = new DinggLogin(page)
    await login.gotoPagelink()
    await login.login('arsp','dingg')
    await page.waitForTimeout(1000)
})

test.skip('general',async({page})=>{
    const addcustomer = new general(page)
    await addcustomer.addbutton()
    await addcustomer.newcustomer()
    await addcustomer.customername('Harsh')
    await addcustomer.customerlastname('Patidar')
    await addcustomer.mobileNo('9981314364')
    await addcustomer. mail('harshupatidar699@gmail.com')
    await addcustomer.selectgender()
    await addcustomer.selectdate()
    await addcustomer.selectmonth()
    await addcustomer.selectyear()
    await addcustomer.anniversaryDate()
    await addcustomer.anniversaryMonth()
    await addcustomer.anniversaryYear()
    await addcustomer.GSTnumber('57684')
    await addcustomer.selectState()
    await addcustomer.clientCode('642')
    await addcustomer.identification('222')
    await addcustomer.fillAddress('indore')
    //await addcustomer.selectLead()
    await addcustomer.description('anything')
    await addcustomer.submit()
    await page.waitForTimeout(3000)

})

test.skip('clientedit',async({page})=>{
    const client = new Edit(page)
    await client.client()
    await client.editbutton()
    await client.editicon()
    await client.changeEmail("harshpatidar699@gmail.com")
    await client.anniversaryDate()
    await client.anniversaryMonth()
    await client.anniversaryYear()
    await client.updateButton()
    await page.waitForTimeout(3000)
})

test.skip('delete',async({page})=>{
    await page.locator('li').filter({ hasText: ' Clients' }).click()
    await page.locator('//label[@for="check-employee12"]').check()
    await page.locator('//button[normalize-space()="Delete"]').click()
    await page.locator('//input[@id="swal2-input"]').type('delete')
    await page.locator('//button[normalize-space()="Yes"]').click()
    await page.waitForTimeout(3000)
})

test.skip('update', async({page})=>{
    const update = new InvoiceEdit(page)
    await update.invoiceClick()
    await update.searchCustomer()
    await update.editbutton()
    await update.changeEmail("harshpatidar699@gmail.com")
    await update.anniversaryDate()
    await update.anniversaryMonth()
    await update.anniversaryYear()
    await update.fillAddress('Pune')
    await update.update()
    await page.waitForTimeout(3000)
})

test('new',async({page})=>{
    const create = new CreateNew(page)
    await create.invoiceClick()
    await create.searchCustomer('9981314364')
    await create.selectdate()
    await create.invoiceNumber()
    await create.selectService()
    await page.waitForTimeout(3000)
    await create.selectStylist()
    await create.selectProduct()
    //await create.saveButton()
    //await page.waitForTimeout(3000)
})