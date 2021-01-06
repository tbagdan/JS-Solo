let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
}

let addIncome = function(account, amount){
    account.income = account.income + amount
}

let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
let summary = getAccountSummary(myAccount)
resetAccount(myAccount)
let summaryReset = getAccountSummary(myAccount)
