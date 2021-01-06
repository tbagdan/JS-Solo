// Ternary operator
const myAge = 27
const message = myAge >= 18  ? 'You can vote' : `You can't vote`

const myNewAge = 18
const showPage = () => 'Showing the page'
const showErrorPage = () => 'Showing the error page'

const newMessage = myNewAge >= 21 ? showPage() : showErrorPage()

// Challenge Area
const team = ['Tyler', 'Porter', 'Eric', 'Bella', 'Norra']
const info = team.length <= 4 ? `Team size: 3` : `Too many people on your team`
console.log(info)