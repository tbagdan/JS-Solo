// Prototypal Inheritance

const Person = function(firstName, lastName, age, likes = []){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.likes = likes
}

Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    
    return bio
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const kudai = new Person('Kudaibergen', 'Toktogazy', 29, ['Teaching', 'Bikings'])
kudai.getBio = function(){
    return `This is fake!`
}

kudai.setName('Alexis Turner')
console.log(kudai.getBio())

const aibek = new Person('Aibek', 'Kutukeev', 28)
console.log(aibek.getBio())

