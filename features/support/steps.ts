import { Given, When, Then } from '@cucumber/node'

Given('{word} has {float} in their account', async (t, customer: string, balance: number) => {
    t.todo()
})

When('{word} tries to withdraw {float}', async (t, customer: string, amount: number) => {
    t.todo()
})

Then('the withdrawal is successful', async (t) => {
    t.todo()
})

Then('the withdrawal is declined', async (t) => {
    t.todo()
})