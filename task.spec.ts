import {test,expect} from '@playwright/test'
import { DinggLogin } from '../pages/DinggLogin'
import { Task } from '../pages/task'

test.beforeEach('Login',async({page})=>{
    const login = new DinggLogin(page)
    await login.gotoPagelink()
    await login.login('arsp','dingg')
    await page.waitForTimeout(1000)
})

test('inventry',async({page})=>{
    const newTask = new Task(page)
    await newTask.int()
    await newTask.salesOrder()
    await newTask. newSalesOrder()
    await newTask.searchCustomer()
    await newTask.plusicon()
    await newTask.fillBilladdress('Jaipur')
    await newTask.savebutton()
    await page.waitForTimeout(2000)
    await newTask.selectbilladd()
    await newTask.plusicon2()
    await newTask.fillShipaddress('Mumbai')
    await newTask.savebutton2()
    await page.waitForTimeout(2000)
    await newTask.selectShipadd()
    await newTask.customerState()
    await newTask.purchaseDate()
    await newTask.purchaseNumber('243')
    await newTask.salesPerson()
    await newTask.addItemButton()
    await newTask.addItem()
    await newTask.addQuantity()
    await newTask.done()
    await newTask.addDiscount()
    await newTask.create()
    await newTask.createDelivery()
    await page.waitForTimeout(2000)
    await newTask.checkProduct()
    await newTask.create1()
    await newTask.done1()
    await newTask.createInvoice()
    await page.waitForTimeout(3000)
    await newTask.payment()
    await page.waitForTimeout(1000)
    await newTask.confirm()
    //await page.waitForTimeout(1000)
    //await newTask.download()
    //await newTask.viewInvoice()
    //await page.waitForTimeout(2000)
})