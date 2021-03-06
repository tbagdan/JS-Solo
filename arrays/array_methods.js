// Array.length : returns the number of elements in the array
let person = ['Aida', 'Jess', 'Nancy', 'Mark']
person.length

// Array.concat() : method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2); // Output: ['a', 'b', 'c', 'd', 'e', 'f']


// Array.copyWithin(target,start, end(excluded)), copies part of an array to another location in the same array and returns it without modifying its length.
const array1 = ['a', 'b', 'c', 'd', 'e'];
// copy to index 0 the element at index 3
array1.copyWithin(0, 3, 4) // Output: ["d", "b", "c", "d", "e"]
// copy to index 1 all elements from index 3 to the end
array1.copyWithin(1, 3) // Output: ["d", "d", "e", "d", "e"]


// Array.splice(start, delete, new value ) : method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
const notes = ['note1', 'note2', 'note3']
notes.splice(1, 0, 'newNote2') // start at index 1, delete nothing, add newNote2 at index 1.
notes.splice(1, 1, 'newNote2') // start at index 1, replace at index 1 with new value, the new value.


// Looping through arrays
notes.forEach(function(item, index){
    
})


// Array.every() : method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const array1 = [1, 30, 39, 29, 10, 13];
const returnValue = array1.every(function(i){
    return i < 40
})


// Array.fill() : method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const array1 = [1, 2, 3, 4]
// fill with 0 from position 2 until position 4
array1.fill(0, 2, 4) // Output: [1, 2, 0, 0]
// fill with 5 from position 1
array1.fill(5, 1) // Output: [1, 5, 5, 5]
array1.fill(6) // Output: [6, 6, 6, 6]


// Array.filter() : method creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6) // Output: Array ["exuberant", "destruction", "present"]

// Array.find() : method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10) // Output: 12


// Array.findIndex() : method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13 // Output: 3


// Array.indexOf() : method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
beasts.indexOf('bison') // Output: 1
beasts.indexOf('bison', 2) // OUtput: 4
beasts.indexOf('giraffe') // Output: -1


// Array.pop() : method removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
plants.pop() // Output: tomato


// Array.push() : method adds one or more elements to the end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows'); // Output: 4

// Array.shift() : method removes the first element from an array and returns that removed element. This method changes the length of the array.
const array1 = [1, 2, 3];
const firstElement = array1.shift() // Output: 1


// Array.unshift() : method adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];
array1.unshift(4, 5) // Output: Array [4, 5, 1, 2, 3]