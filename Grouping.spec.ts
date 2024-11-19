import{test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('This is beforeAll hook..')
})

test.afterAll(async()=>{
    console.log('This is afterAll hook..')
})

test.beforeEach(async()=>{
    console.log('This is beforeEach hook..')
})

test.afterEach(async()=>{
    console.log('This is afterEach hook..')
})

test.describe.only('group1',()=>{

    test('test1',async({page})=>{
        console.log('this is test1..')
        })
        
        test('test2',async({page})=>{
        console.log('this is test2..')
        })
})

test.describe.skip('group2',()=>{

    test('test3',async({page})=>{
        console.log('this is test3..')
        })
        
        test('test4',async({page})=>{
        console.log('this is test4..')
        })
})

