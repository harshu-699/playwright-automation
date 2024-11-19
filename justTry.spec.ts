import {test,expect} from '@playwright/test'
import { JustTryLogin } from '../pages/justTryLogin'
import log from "../testdata/login.json"

log.forEach((data) =>{    //call back function
    test("Login" + data.username ,async({page})=>{
        const login = new JustTryLogin(page)
        await login.gotoPagelink()
        await login.login(data.username,data.password)
        await page.waitForTimeout(1000)
    })
})

// for(const data of log){
//     test("Login" + data.username ,async({page})=>{
//         const login = new JustTryLogin(page)
//         await login.gotoPagelink()
//         await login.login(data.username,data.password)
//         await page.waitForTimeout(1000)
//     }) 
// }
