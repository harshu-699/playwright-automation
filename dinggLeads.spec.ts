import {test,expect} from '@playwright/test'
import { DinggLogin } from '../pages/DinggLogin'
import { leads } from '../pages/leads'
import { NegativeLead } from '../pages/NegativeLead'
import { editLead } from '../pages/editLead'
import { deleteLead } from '../pages/deleteLead'
import { FollowUp } from '../pages/DinggFollowUp'
import { VerifyAssign } from '../pages/VerifyAssign'
import { Import } from '../pages/Import'
import { filter } from '../pages/filter'


test.beforeEach('Login',async({page})=>{
    const login = new DinggLogin(page)
    await login.gotoPagelink()
    await login.login('arsp','dingg')
    await page.waitForTimeout(1000)
})

test('Dinggleads',async({page})=>{
    //leads
    const lead = new leads(page)
    await lead.lead()
    await lead.enquiry()
    await lead.customer('9922243332')
    await lead.enquiryDeskdetail('In magarpatta city, salon is available or not')
    await lead.enquiryServiceDetail('Hair')
    await lead.assigned()
    await lead.date('oct 16,2024')
    await lead.radiobutton()
    await lead.followupdate()
    await lead.followupTime()
    await lead.mode('9981314364')
    await lead.addButton()
    await page.waitForTimeout(3000)
})

test.skip('leadsNegative',async({page})=>{
    //negative lead
    const lead = new NegativeLead(page)
    await lead.lead()
    await lead.enquiry()
    //await lead.customer('9922243332')
    await lead.enquiryDeskdetail('Salon is open or not')
    await lead.assigned()
    await lead.enquiryServiceDetail('Hair')
    await lead.date('oct 16,2024')
    await lead.radiobutton()
    await lead.followupdate()
    await lead.followupTime()
    await lead.mode('9981314364')
    await lead.addButton()
    await page.waitForTimeout(3000)
})

test.skip('editlead',async({page})=>{
    const Edit = new editLead(page)
    await Edit.Leads()
    await Edit.editicon()
    await Edit.edittype()
    await Edit.updateclick()
})

test.skip('delete',async({page})=>{
    const dlt = new deleteLead(page)
    await dlt.leads()
    await dlt.deleteIcon()
    await dlt.deleteLead()
})

test.skip('FollowUp',async({page})=>{
    //followup
    const followup = new FollowUp(page)
    await followup.Leads()
    await followup.Follow()
    await followup.AddButton()
    await followup.Date()
    await followup.Time()
    await followup.Text('Arrival')
    await followup.Mode('9981314364')
    await followup.Selection()
    await followup.AddedButton()
})

test.skip('Filter',async({page})=>{
   const Filter = new filter(page)
   await Filter.leads()
   await Filter.selectStatus()
   await Filter.selectemploye()
   await Filter.selectFollowup()
   await Filter.selectbutton()
    await page.waitForTimeout(3000)
})

test('Verify',async({page})=>{
    await page.locator('li').filter({ hasText: 'Leads' }).click()
    await page.getByPlaceholder('Search Enquiry By Name & Number').click()
    await page.getByPlaceholder('Search Enquiry By Name & Number').fill('Santosh')
    const verify=await page.locator("//table[@id='DataTables_Table_0']/tbody/tr/td[2]").filter({hasText:'Santosh Patidar'})
    await expect(verify).toHaveText('Santosh Patidar')
    await page.waitForTimeout(3000)
})

test.skip('VerifyAssign',async({page})=>{
    //verify
    const verify = new VerifyAssign(page)
    await verify.lead()
    await verify.enquiry()
    await verify.customer('9922243332')
    await verify.enquiryDeskdetail('Salon')
    await verify.enquiryServiceDetail('Hair')
    await verify.date('oct 30,2024')
    await verify.radiobutton()
    await verify.followupdate()
    await verify.followupTime()
    await verify.mode('9981314364')
    await verify.addButton()
    const assign=await page.locator("//table[@id='DataTables_Table_0']/tbody/tr[1]/td").filter({hasText:'NONE'})
    await expect(assign).toHaveText('NONE')
})

test.skip('importfile',async({page})=>{
    const importfile = new Import(page)
    await importfile.Leads()
    await importfile.importbutton()
    await importfile.chooseFile()
    await importfile.select_sheet()
    await importfile.select_name()
    await importfile.select_mobile()
    await importfile.select_email()
    await importfile.select_date()
    await importfile.select_date_format()
    await importfile.select_description()
    await importfile.select_type()
    await importfile.select_enquiry()
    await importfile.select_followup_date()
    await importfile.select_followup_date_format()
    await importfile.select_followup_time()
    await importfile.select_followup_mode()
    await importfile.select_assigned_to()
    await importfile.select_button()
    await page.waitForTimeout(3000)
})
