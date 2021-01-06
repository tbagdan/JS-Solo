const notes = ['Note 1', 'Note 2', 'Note 3']

// array.length - to see how many items are in an array.
notes.length

// array[] - to choose an individual item.
notes[1] // will return Note 2
notes[notes.legth - 1] // to get the last item

// array.push(item) - appends new elements to an array, and returns a new length.
notes.push('Note 4') // or notes.push('Note 4', 'Note 5')

// array.pop() - removes the last element and returns it.
notes.pop()

// array.shift() - removes the first element and returns it.
notes.shift()

// array.unshift() - appends new elements to the start of an array.
notes.unshift()

// array.splice() - removes and inserts elements from an array at a specified index.
notes.splice(1, 1) // start at index 1 and remove 1 item.
notes.splice(1, 0, 'New Note') // start at index 1, delete none, insert new item instead of index 1.
notes.splice(1, 1, 'New Note') // start at index 1, delete item on index 1, add new item

// array.forEach() - to loop through the items
notes.forEach(function(item, index){

})

// for loop
for(i = 0; i < notes.length; i++){
    console.log(`${i + 1}. ${ntoes[i]}`)
}

// array.indexOf() - to locate a value in an array, return an index of first occurance of the searched value. Returns -1 of the value doesn't exist. Uses triple equals ===
notes.indexOf()

// array.findIndex() - looks for first match it finds, depending on specific value and returns the index
const todos = [{
    text: 'Meet Aya for lunch',
    completed: false
}, {
    text: 'Look over the Aqila contract',
    completed: true
}, {
    text: 'Pick up the suit from the tailor',
    completed: false
}, {
    text: 'Call parents about the weekend',
    completed: false
}, {
    text: 'Order cat food online',
    completed: true
}]

const index = todos.findIndex(function(todo){
    return todo.text.toLowerCase() === 'Meet Aya for lunch'
})

// array.find() - returns the element value, similar to findIndex, instead of index returns value.
const removeTodo = function(todos, text){
    return todos.find(function(todo){
        return todo.text.toLowerCase() === text.toLowerCase()
    })
}

// Arrays passed by reference which means when we pass an array to a method and change something in the array, the change will affect the original array.

// array.filter() - returns the elements from the array that meet the criteria
const filteredNotes = notes.filter(function(note){
    return true // returns the original array, since we consider everything a match.
})

const findNotes = function(notes, query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query)
        const isBodyMatch = note.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}

// array.sort()
const sortedTodo = function(todos){
    return todos.sort(function(a, b){
        if(!a.completed && b.completed){
            return -1
        } else if(!b.completed && a.completed){
            return 1
        } else{
            return 0
        }
    })
}
