// DOM - Document Object Model
// document.querySelector('tag') - query a tag
// tag.remove() - removes the element from DOM and Document flow
// const ps = document.querySelectorAll('tag') - query all specific tags, and delete all of them with ps.forEach() method
// tag.textContent - to read content of the tag
// document.createElement('tag') to create an element
// .appendChild() - to add a tag with value after a tag

// localStorage.setItem(key, value)
// localStorage.getItem('key')
// localStorage.removeItem('key)
// localStorage.clear()


let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

// Create Note button
document.querySelector('#create-note').addEventListener('click', function(e){
    const id = guid()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})

// Search input
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// Dropdown
document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

















// Submit form
// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })