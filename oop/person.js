// Prototypal Inheritance

// New Version
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio(){
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}


class Student extends Person {
    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change){
        this.grade = this.grade + change
    }
    getBio(){
        const status = this.grade >= 70 ? `passing` : `failing`
        return `${this.firstName} is ${status} the class.`
    }
}

const inna = new Employee('Ina', 'Mas', 33, 'Teacher', [])
inna.fullName = 'Clancey Turner'
console.log(inna.getBio())























// Old version
const FirstPerson = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.likes = likes
}

FirstPerson.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

FirstPerson.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const kudai = new FirstPerson('Kudaibergen', 'Toktogazy', 29, ['Teaching', 'Bikings'])
kudai.getBio = function () {
    return `This is fake!`
}

kudai.setName('Alexis Turner')

const aibek = new Person('Aibek', 'Kutukeev', 28)

