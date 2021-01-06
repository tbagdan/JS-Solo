let isAccountLocked = false;
let userRole = 'user'

if(isAccountLocked){
    console.log('The account is locked.')
} else if(userRole === 'admin'){
    console.log('Welcome admin.')
} else {
    console.log('Welcome user.')
}

let temp = 11

if(temp < 13){
    console.log('It\'s freezing outside')
} else if(temp > 100){
    console.log('It\'s hot outside.')
} else{
    console.log('It\'s pretty nice. Go for it.')
}