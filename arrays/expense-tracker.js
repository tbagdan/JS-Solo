const account = {
    name: 'Kudaibergen',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        this.expenses.forEach(function(expense){
            totalExpenses += expense.amount
        })

        let totalIncome = 0
        this.income.forEach(function(income){
            totalIncome += income.amount
        })

        let balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    },
   
}

account.addIncome('Vanguard dividend', 5000)
account.addExpense('New three-piece suit', 100)
const summ = account.getAccountSummary()
console.log(summ)

