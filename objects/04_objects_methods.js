let restaurant = {
    name: `ASB`,
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount += partySize
    },
    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

restaurant.seatParty(72)
restaurant.removeParty(2)
console.log(restaurant)
console.log(restaurant.checkAvailability(4))