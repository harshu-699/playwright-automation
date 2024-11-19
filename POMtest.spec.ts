import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { Cartpage } from '../pages/CartPage'

test('test', async({page})=>{

    //Login
    const Login=new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login('pavanol','test@123')
    await page.waitForTimeout(3000)

    //Home
    const home=new HomePage(page)
    await home.addProductToCart('Nokia lumia 1520')
    await page.waitForTimeout(3000)
    await home.gotocart();

    //Cart
    const cart=new Cartpage(page)
    await page.waitForTimeout(3000)
    const status=await cart.checkProductInCart('Nokia lumia 1520')
    expect(await status).toBe(true);

})