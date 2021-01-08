const data = {
    locations: [],
    get location(){
        return this._locaiton
    },
    set location(value){
        this._locaiton = value.trim()
        this.locations.push(this._locaiton)
    }
}

// Code that uses data object
data.location = '  Philadelphia   '
data.location = ' New York'
console.log(data)